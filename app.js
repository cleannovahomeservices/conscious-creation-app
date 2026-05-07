/* ============================================================
   CONSCIOUS CREATION — The Practice App
   App Logic · Routing · State · Content
   ============================================================ */

// ============== CONTENT DATA ==============

const TEACHINGS = {
  foundations: [
    {
      id: 'wholeness',
      title: 'Wholeness Is Your Nature',
      decree: 'I AM whole. Nothing is missing in what I AM.',
      body: [
        'You are not approaching wholeness. You are it. Whatever you appear to lack is already present in seed form within the I AM that you are.',
        'The wanting self believes it lacks. The I AM does not lack. When wanting arises in you, do not suppress it — recognise it as a movement of the Self, then return to the wholeness in which the wanting arises.',
        'Wanting is not the problem. Forgetting wholeness is.'
      ]
    },
    {
      id: 'consciousness',
      title: 'Consciousness Is Causal',
      decree: 'My world is the form my consciousness takes.',
      body: [
        'The world is a mirror. The mirror does not change unless what stands before it changes.',
        'What is in your life today is the form of yesterday\'s consciousness. What you hold today shapes tomorrow. The observing of this is itself liberating.',
        'To shift the form, shift the consciousness. There is no other way.'
      ]
    },
    {
      id: 'doer',
      title: 'You Are Not the Doer',
      decree: 'I AM that through which all is done.',
      body: [
        'The doing happens. You are not the doer. The Self moves through this body, this voice, this life.',
        'Strain is the signature of false agency. Ease is the signature of alignment.',
        'Today, watch one ordinary task being done — not as someone doing it, but as the witness watching it being done. Notice that the task is still completed — perhaps even more easily, more cleanly, more gracefully.'
      ]
    }
  ],
  teachings: [
    {
      id: 'identity',
      title: 'Identity Precedes Manifestation',
      decree: 'I create not what I want, but what I AM.',
      body: [
        'You do not manifest what you want — you manifest what you ARE.',
        'The personal mind chases the form: <em>if I get this thing, I will be that person.</em> The order is reversed. The Self is first; the form follows. You step into the identity, and life rearranges itself around the new ground.',
        'Choose one identity to step into. Not "I want to be." But "I AM."'
      ]
    },
    {
      id: 'imagination',
      title: 'Imagination Is the Creative Faculty',
      decree: 'What wants to come through me, I welcome.',
      body: [
        'Imagination is not invention. Imagination is reception.',
        'You do not figure out what to manifest. You listen for what is already moving in you, asking to be brought through. The vision is not what you want — it is what already exists in the unmanifest, presenting itself to be brought through.',
        'Sit in stillness. Ask quietly: <em>what wants to come through me?</em> Receive what arises.'
      ]
    },
    {
      id: 'assumption',
      title: 'Assumption Is the Law',
      decree: 'I AM the one who has already received.',
      body: [
        'The state you are stepping into already exists within the I AM. You do not pretend to be what you are not. You remember what you have always been.',
        'The assumption is not theatrical. It is the recognition of a state already complete in the Self, now claimed as your present condition.',
        'Speak it inwardly with quiet certainty. Not as wish. As recognition.'
      ]
    },
    {
      id: 'feeling',
      title: 'Feeling Is the Gestational Power',
      decree: 'Feeling is the gestational power.',
      body: [
        'Thought without feeling does not impress consciousness.',
        'The body is the gestational womb. Without the feeling, the womb is empty. With it, manifestation becomes inevitable.',
        'Find the feeling of the wish fulfilled and stay there. Where in the body does it live? Let it expand from there. Let the cells receive it.'
      ]
    },
    {
      id: 'embodiment',
      title: 'Embodiment Confirms',
      decree: 'I walk now as the one who has received.',
      body: [
        'The world organises itself around embodied states. Today align the small things — speech, gesture, choices — with the assumed identity.',
        'This does not require dramatic external change. It requires alignment in details: how you answer the phone, what you say yes and no to, the quality of presence you bring.',
        'Where inner and outer agree, the world recognises and responds.'
      ]
    },
    {
      id: 'surrender',
      title: 'Surrender Is the Activation',
      decree: 'Not my will, but Thine. The Self moves through me.',
      body: [
        'Surrender is not giving up. Surrender is the moment the larger Will can move freely.',
        'Where you had been forcing, you let go — and notice the next step appear without your having to figure it out. The clock you were racing was a clock the Self does not know.',
        'Release the form. Keep the essence. <em>This, or something greater, in service of the highest Good.</em>'
      ]
    },
    {
      id: 'love',
      title: 'Love Is the Law of Return',
      decree: 'I create from Love. I create for the Whole.',
      body: [
        'What is created from Love endures. What is created from fear, lack, or comparison consumes itself eventually.',
        'Before any significant action, ask: <em>is this in Love?</em> If yes, proceed. If not, wait until Love is present, then act.',
        'To activate the rhythm of return, give. Without record. Without expectation. The flow ceases when giving ceases.'
      ]
    }
  ],
  diversions: [
    {
      id: 'wanting-from-lack',
      title: 'Wanting from Lack',
      decree: 'The remedy: wholeness first, then desire.',
      body: [
        'The most common diversion. To want something while feeling its absence is to confirm the absence.',
        'The remedy: feel the wholeness first. From wholeness, the wanting becomes preference, not need. From preference, manifestation becomes effortless.'
      ]
    },
    {
      id: 'forcing',
      title: 'Forcing and Urgency',
      decree: 'The remedy: surrender, then act.',
      body: [
        'Urgency is the personal mind racing a clock the Self does not know.',
        'When urgency arises, breathe out long. Whisper: <em>surrendered.</em> Notice the urgency dissolve. The next step appears.'
      ]
    },
    {
      id: 'mental-rehearsal',
      title: 'Mental Rehearsal Without Feeling',
      decree: 'The remedy: feel, do not visualise.',
      body: [
        'Visualizing without feeling is empty. The image, however vivid, does not impress consciousness without the felt sense.',
        'Less seeing. More feeling. Where in the body does the assumed state live? Stay there.'
      ]
    },
    {
      id: 'spiritual-bypass',
      title: 'Spiritual Bypass',
      decree: 'The remedy: include what is, then transcend.',
      body: [
        'Using spirituality to avoid difficult emotions or situations.',
        'The remedy is not to avoid the difficult, but to include it within the I AM. <em>Even this is held.</em> From there, the next step is possible.'
      ]
    },
    {
      id: 'egoic-appropriation',
      title: 'Egoic Appropriation',
      decree: 'The remedy: I AM not the doer.',
      body: [
        'When the personality claims credit for what the Self has done. <em>I manifested this.</em>',
        'The remedy is humility — not as performance, but as accuracy. The Self does the work. You witness.'
      ]
    },
    {
      id: 'attachment',
      title: 'Attachment to Specific Form',
      decree: 'The remedy: this, or something greater.',
      body: [
        'Gripping the exact outcome — the exact person, the exact circumstance, the exact timing.',
        'The Self knows better than the personal mind how the essence should appear. Hold the essence. Release the form.'
      ]
    },
    {
      id: 'comparison',
      title: 'Comparison',
      decree: 'The remedy: my path is mine.',
      body: [
        'Measuring your manifestation against another\'s. The diversion that ends all manifestation.',
        'The Self that moves through you is not the Self that moves through them. Your timing, your forms, your way are yours alone.'
      ]
    }
  ]
};

const IAM_SUGGESTIONS = [
  'I AM whole',
  'I AM held',
  'I AM the one in whom all good already lives',
  'I AM peace',
  'I AM love',
  'I AM the Self extending into form'
];

const MIDDAY_PROMPTS = [
  'Where today did you forget the I AM you set this morning?',
  'What state are you holding right now? Is it the one you chose?',
  'In what spirit have you created this day so far?',
  'What wants to come through you in this moment?',
  'Where have you been forcing what could simply unfold?',
  'Return to the I AM. Three breaths.'
];

const SAMPLE_LETTERS = [
  {
    id: 'beta-welcome',
    title: 'Welcome to the practice',
    date: 'Today',
    audioMinutes: null,
    unread: true,
    preview: 'A first word for those joining the beta. The practice is the same whether walked alone or accompanied — but accompaniment carries its own quiet gift.',
    body: [
      'Beloved practitioner,',
      'You are among the first to walk this practice in companion form. Thank you for coming early. What you offer in feedback over these weeks will shape how this app meets thousands more in time.',
      'A few words, before you begin.',
      '<em>This is not a productivity app.</em> The practice is the rhythm of return — morning, day, evening — to the I AM that you already are. The app accompanies that rhythm. It does not generate it. If a day passes when you do not open the app, no streak is broken. The path you walk is whole regardless.',
      '<em>The Recognitions are not a score.</em> They are simply a quiet record. They never punish absence. They never demand presence. They are the witness — neither cheering nor scolding.',
      '<em>The practice precedes the app.</em> Begin with the books — <em>The Way of Conscious Creation</em> and <em>The Practice — Twenty-One Days of Embodiment</em> — if you have not. The app is designed as their daily companion, not their replacement.',
      'Walk gently. Tell me what you find.',
      '— Constantin'
    ]
  },
  {
    id: 'middle-of-practice',
    title: 'A word for those in the middle',
    date: 'Coming soon',
    audioMinutes: 4,
    unread: false,
    preview: 'For the moment between first illumination and deeper recognition. The ground that often feels like nothing.',
    body: [
      '<em>This letter is a placeholder for now. Audio and full text will arrive shortly.</em>'
    ]
  }
];

// ============== STATE MANAGEMENT ==============

const STORAGE_KEY = 'cc_practice_state_v1';

const defaultState = {
  initialized: false,
  user: {
    name: '',
    iAm: 'I AM the one in whom all good already lives',
    rhythm: {
      morning: 'when-you-wake',
      midday: 'around-1pm',
      evening: 'before-bed'
    }
  },
  today: {
    date: '',
    iAm: '',
    contemplation: null,
    morningCompleted: false,
    middayCompleted: false,
    eveningCompleted: false
  },
  practice: {
    daysWalked: 0,
    history: {} // { 'YYYY-MM-DD': { morning, midday, evening } }
  },
  ui: {
    seenInstallHint: false
  }
};

let state = loadState();

function loadState() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return { ...defaultState, ...parsed };
    }
  } catch (e) {
    console.error('Could not load state', e);
  }
  return JSON.parse(JSON.stringify(defaultState));
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error('Could not save state', e);
  }
}

function resetState() {
  state = JSON.parse(JSON.stringify(defaultState));
  saveState();
}

// ============== TIME / PERIOD ==============

function getCurrentPeriod() {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 11) return 'morning';
  if (hour >= 11 && hour < 17) return 'midday';
  if (hour >= 17 && hour < 20) return 'evening';
  return 'night';
}

function applyPeriod() {
  const period = getCurrentPeriod();
  document.body.className = '';
  document.body.classList.add(`period-${period}`);
}

function getTodayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function ensureTodayInitialized() {
  const today = getTodayKey();
  if (state.today.date !== today) {
    state.today = {
      date: today,
      iAm: state.user.iAm,
      contemplation: null,
      morningCompleted: false,
      middayCompleted: false,
      eveningCompleted: false
    };
    saveState();
  }
}

// ============== ROUTING ==============

function navigate(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(screenId);
  if (target) {
    target.classList.add('active');
    target.scrollTop = 0;
  }
  // Update bottom nav active state
  document.querySelectorAll('.bottom-nav .nav-item').forEach(n => {
    n.classList.toggle('active', n.dataset.target === screenId);
  });
  // Update period in case time has changed
  applyPeriod();

  // Specific screen renders
  if (screenId === 'today') renderToday();
  if (screenId === 'library') renderLibrary();
  if (screenId === 'letters') renderLetters();
  if (screenId === 'path') renderPath();
  if (screenId === 'settings') renderSettings();
}

// ============== RENDERING ==============

function renderIamSuggestions(containerEl, onPick) {
  containerEl.innerHTML = '';
  IAM_SUGGESTIONS.forEach(suggestion => {
    const btn = document.createElement('button');
    btn.className = 'iam-chip';
    btn.textContent = suggestion;
    btn.addEventListener('click', () => onPick(suggestion));
    containerEl.appendChild(btn);
  });
}

function renderToday() {
  ensureTodayInitialized();

  const period = getCurrentPeriod();
  const greetingEl = document.getElementById('today-greeting');
  const titleEl = document.getElementById('today-title');
  const subtitleEl = document.getElementById('today-subtitle');
  const iamEl = document.getElementById('today-iam');
  const practicesEl = document.getElementById('today-practices');

  // Greeting and title based on time of day
  const name = state.user.name ? `, ${state.user.name}` : '';
  const today = new Date();
  const dayName = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][today.getDay()];

  if (period === 'morning') {
    greetingEl.textContent = `${dayName} · The Morning`;
    titleEl.innerHTML = `Good morning${name}`;
    subtitleEl.textContent = 'Today is yours to shape. Begin in stillness.';
  } else if (period === 'midday') {
    greetingEl.textContent = `${dayName} · The Day`;
    titleEl.innerHTML = `The day unfolds${name}`;
    subtitleEl.textContent = 'Return often. The I AM does not require visiting hours.';
  } else if (period === 'evening') {
    greetingEl.textContent = `${dayName} · The Evening`;
    titleEl.innerHTML = `The day is closing${name}`;
    subtitleEl.textContent = 'Bless what was lived. Release what was assumed.';
  } else {
    greetingEl.textContent = `${dayName} · Night`;
    titleEl.innerHTML = `Goodnight${name}`;
    subtitleEl.textContent = 'Sleep is the I AM resting in itself.';
  }

  // I AM display
  iamEl.textContent = state.today.iAm || state.user.iAm;

  // Practice cards (different focus depending on time of day)
  practicesEl.innerHTML = '';

  const morningCard = practiceCard({
    label: timeLabel(state.user.rhythm.morning),
    title: 'The Morning Anchor',
    desc: 'Three breaths. Set today\'s I AM. Receive the contemplation.',
    completed: state.today.morningCompleted,
    featured: !state.today.morningCompleted && (period === 'morning'),
    dimmed: state.today.morningCompleted,
    onClick: () => {
      resetMorningSteps();
      navigate('morning-anchor');
    }
  });
  practicesEl.appendChild(morningCard);

  const middayCard = practiceCard({
    label: timeLabel(state.user.rhythm.midday),
    title: 'The Midday Pause',
    desc: 'A brief return to the I AM you set this morning.',
    completed: state.today.middayCompleted,
    featured: !state.today.middayCompleted && (period === 'midday' || (period === 'morning' && state.today.morningCompleted)),
    dimmed: false,
    onClick: () => {
      preparMidday();
      navigate('midday-pause');
    }
  });
  practicesEl.appendChild(middayCard);

  const eveningCard = practiceCard({
    label: timeLabel(state.user.rhythm.evening),
    title: 'The Evening Release',
    desc: 'Bless what was lived. Release the form. Sleep into the I AM.',
    completed: state.today.eveningCompleted,
    featured: !state.today.eveningCompleted && (period === 'evening' || period === 'night'),
    dimmed: false,
    onClick: () => {
      resetEveningSteps();
      navigate('evening-release');
    }
  });
  practicesEl.appendChild(eveningCard);
}

function timeLabel(rhythmKey) {
  const labels = {
    'when-you-wake': 'When you wake',
    'early-morning': 'Early morning',
    'after-coffee': 'After coffee',
    'midday': 'Midday',
    'around-1pm': 'Around 1pm',
    'lunch': 'At lunch',
    'afternoon-pause': 'Afternoon pause',
    'before-bed': 'Before bed',
    'after-dinner': 'After dinner',
    'when-the-day-closes': 'When the day closes'
  };
  return labels[rhythmKey] || rhythmKey;
}

function practiceCard({ label, title, desc, completed, featured, dimmed, onClick }) {
  const card = document.createElement('div');
  card.className = 'practice-card';
  if (featured) card.classList.add('featured');
  if (dimmed) card.classList.add('dimmed');
  if (completed) card.classList.add('completed');

  card.innerHTML = `
    <div class="card-label">${label}</div>
    <h4>${title}</h4>
    <p>${desc}</p>
    ${completed ? '<div class="completed-tag">✓ Walked today</div>' : '<div class="arrow">Begin →</div>'}
  `;

  card.addEventListener('click', () => {
    if (!dimmed) onClick();
  });

  return card;
}

function renderLibrary() {
  const container = document.getElementById('library-content');
  container.innerHTML = '';

  const sections = [
    { label: 'The Foundations', items: TEACHINGS.foundations },
    { label: 'The Seven Teachings', items: TEACHINGS.teachings },
    { label: 'The Seven Diversions', items: TEACHINGS.diversions }
  ];

  sections.forEach(sec => {
    const sectionEl = document.createElement('div');
    sectionEl.className = 'library-section';
    sectionEl.innerHTML = `<div class="section-label">${sec.label}</div>`;
    sec.items.forEach(item => {
      const itemEl = document.createElement('div');
      itemEl.className = 'library-item';
      itemEl.innerHTML = `<div class="item-title">${item.title}</div><div class="item-arrow">→</div>`;
      itemEl.addEventListener('click', () => openTeaching(item));
      sectionEl.appendChild(itemEl);
    });
    container.appendChild(sectionEl);
  });
}

function openTeaching(teaching) {
  const container = document.getElementById('teaching-detail-content');
  container.innerHTML = `
    <div class="teaching-eyebrow">From The Way of Conscious Creation</div>
    <h2 class="teaching-title">${teaching.title}</h2>
    <div class="teaching-decree">${teaching.decree}</div>
    <div class="teaching-body">
      ${teaching.body.map(p => `<p>${p}</p>`).join('')}
    </div>
  `;
  navigate('teaching-detail');
}

function renderLetters() {
  const container = document.getElementById('letters-content');
  container.innerHTML = '';

  SAMPLE_LETTERS.forEach(letter => {
    const card = document.createElement('div');
    card.className = 'letter-card';
    if (letter.unread) card.classList.add('unread');
    const audioTag = letter.audioMinutes
      ? `<div class="audio-tag">● ${letter.audioMinutes} min audio${letter.unread ? ' · New' : ''}</div>`
      : `<div class="audio-tag">${letter.unread ? 'New · Text' : 'Text'}</div>`;
    card.innerHTML = `
      <div class="meta">
        ${audioTag}
        <div class="date">${letter.date}</div>
      </div>
      <div class="letter-title">${letter.title}</div>
      <div class="letter-preview">${letter.preview}</div>
    `;
    card.addEventListener('click', () => openLetter(letter));
    container.appendChild(card);
  });
}

function openLetter(letter) {
  const container = document.getElementById('letter-detail-content');
  container.innerHTML = `
    <div class="teaching-eyebrow">Letter from Constantin · ${letter.date}</div>
    <h2 class="teaching-title">${letter.title}</h2>
    ${letter.audioMinutes ? `
      <div class="contemplation-card" style="text-align: center; margin: 16px 0;">
        <div class="label">Audio · ${letter.audioMinutes} min</div>
        <div style="font-family: 'Cormorant Garamond', serif; font-style: italic; color: var(--text-soft); font-size: 13px; margin-top: 8px;">Audio playback coming in next build</div>
      </div>` : ''}
    <div class="teaching-body">
      ${letter.body.map(p => `<p>${p}</p>`).join('')}
    </div>
  `;
  // Mark as read
  letter.unread = false;
  navigate('letter-detail');
}

function renderPath() {
  document.getElementById('days-walked-number').textContent = state.practice.daysWalked;

  // Week calendar
  const cal = document.getElementById('week-calendar');
  cal.innerHTML = '';

  const labels = ['M','T','W','T','F','S','S'];
  labels.forEach(l => {
    const cell = document.createElement('div');
    cell.className = 'cal-day label-row';
    cell.textContent = l;
    cal.appendChild(cell);
  });

  // Calculate this week's days (Monday start)
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0=Sun..6=Sat
  const daysFromMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
  const monday = new Date(today);
  monday.setDate(today.getDate() - daysFromMonday);

  for (let i = 0; i < 7; i++) {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    const key = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
    const cell = document.createElement('div');
    cell.className = 'cal-day';

    const isToday = key === getTodayKey();
    const isFuture = d > today && !isToday;
    const walked = state.practice.history[key];

    if (isFuture) {
      cell.classList.add('empty');
      cell.textContent = d.getDate();
    } else if (isToday) {
      if (walked) {
        cell.classList.add('walked');
        cell.textContent = '●';
      } else {
        cell.classList.add('today');
        cell.textContent = d.getDate();
      }
    } else if (walked) {
      cell.classList.add('walked');
      cell.textContent = '●';
    } else {
      cell.textContent = d.getDate();
    }
    cal.appendChild(cell);
  }

  // Stages — based on total days
  const stages = document.getElementById('stages-list');
  const days = state.practice.daysWalked;
  const stage1 = Math.min(days, 7);
  const stage2 = Math.min(Math.max(days - 7, 0), 7);
  const stage3 = Math.min(Math.max(days - 14, 0), 7);

  stages.innerHTML = `
    <div class="stage-row">
      <div class="stage-name">Establishing the Ground</div>
      <div class="stage-count">${stage1} / 7</div>
    </div>
    <div class="stage-row">
      <div class="stage-name">Active Creation</div>
      <div class="stage-count">${stage2} / 7</div>
    </div>
    <div class="stage-row">
      <div class="stage-name">Maturing the Mastery</div>
      <div class="stage-count">${stage3} / 7</div>
    </div>
  `;
}

function renderSettings() {
  document.getElementById('settings-name').value = state.user.name || '';
  document.getElementById('settings-iam').value = state.user.iAm || '';
  document.getElementById('settings-morning').value = state.user.rhythm.morning;
  document.getElementById('settings-midday').value = state.user.rhythm.midday;
  document.getElementById('settings-evening').value = state.user.rhythm.evening;
}

// ============== PRACTICE FLOWS ==============

function resetMorningSteps() {
  document.querySelectorAll('#morning-anchor .practice-step').forEach(s => s.classList.remove('active'));
  document.getElementById('morning-step-1').classList.add('active');
  document.getElementById('input-today-iam').value = state.today.iAm || state.user.iAm;
  renderIamSuggestions(document.getElementById('morning-iam-suggestions'), (v) => {
    document.getElementById('input-today-iam').value = v;
  });
}

function preparMidday() {
  // Pick a prompt
  const prompt = MIDDAY_PROMPTS[Math.floor(Math.random() * MIDDAY_PROMPTS.length)];
  document.getElementById('midday-prompt-text').textContent = prompt;
}

function resetEveningSteps() {
  document.querySelectorAll('#evening-release .practice-step').forEach(s => s.classList.remove('active'));
  document.getElementById('evening-step-1').classList.add('active');
}

function nextStep(currentId, nextId) {
  document.getElementById(currentId).classList.remove('active');
  document.getElementById(nextId).classList.add('active');
}

function rerollContemplation() {
  const all = [...TEACHINGS.foundations, ...TEACHINGS.teachings];
  const randomTeaching = all[Math.floor(Math.random() * all.length)];
  state.today.contemplation = randomTeaching.id;
  saveState();
  showContemplation(randomTeaching);
}

function showContemplation(teaching) {
  document.getElementById('today-contemplation-card').innerHTML = `
    <div class="label">Contemplation for the day</div>
    <div class="quote">${teaching.decree}</div>
    <div class="source">From <em>${teaching.title}</em></div>
  `;
}

function getCurrentContemplation() {
  if (state.today.contemplation) {
    const all = [...TEACHINGS.foundations, ...TEACHINGS.teachings];
    return all.find(t => t.id === state.today.contemplation);
  }
  return null;
}

function markPracticeWalked() {
  const today = getTodayKey();
  if (!state.practice.history[today]) {
    state.practice.history[today] = {};
    state.practice.daysWalked++;
  }
  saveState();
}

function completeMorning() {
  ensureTodayInitialized();
  state.today.morningCompleted = true;
  state.practice.history[getTodayKey()] = state.practice.history[getTodayKey()] || {};
  state.practice.history[getTodayKey()].morning = true;
  markPracticeWalked();
  saveState();
  navigate('today');
}

function completeMidday() {
  ensureTodayInitialized();
  state.today.middayCompleted = true;
  state.practice.history[getTodayKey()] = state.practice.history[getTodayKey()] || {};
  state.practice.history[getTodayKey()].midday = true;
  markPracticeWalked();
  saveState();
  navigate('today');
}

function completeEvening() {
  ensureTodayInitialized();
  state.today.eveningCompleted = true;
  state.practice.history[getTodayKey()] = state.practice.history[getTodayKey()] || {};
  state.practice.history[getTodayKey()].evening = true;
  markPracticeWalked();
  saveState();
  navigate('today');
}

// ============== BREATH ANIMATION ==============

function startBreathCircle(circleId, cycles = 3) {
  const circle = document.getElementById(circleId);
  if (!circle) return;
  let cycle = 0;
  const text = circle.querySelector('.breath-text');

  function inhale() {
    if (cycle >= cycles) {
      text.textContent = 'Continue when ready';
      return;
    }
    text.textContent = 'Breathe in · I';
    circle.classList.add('breathing-in');
    circle.classList.remove('breathing-out');
    setTimeout(exhale, 4000);
  }
  function exhale() {
    text.textContent = 'Breathe out · AM';
    circle.classList.remove('breathing-in');
    circle.classList.add('breathing-out');
    cycle++;
    setTimeout(inhale, 4000);
  }
  inhale();
}

// Click breath circle to start
function setupBreathCircles() {
  ['breath-circle-morning', 'breath-circle-midday', 'breath-circle-evening'].forEach(id => {
    const circle = document.getElementById(id);
    if (circle) {
      circle.addEventListener('click', () => startBreathCircle(id, 3));
    }
  });
}

// ============== EVENT WIRING ==============

function setupActions() {
  document.body.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-action]');
    if (!btn) {
      // Bottom nav?
      const navItem = e.target.closest('.bottom-nav .nav-item');
      if (navItem && navItem.dataset.target) {
        navigate(navItem.dataset.target);
      }
      return;
    }
    const action = btn.dataset.action;
    handleAction(action, btn);
  });
}

function handleAction(action, btn) {
  switch (action) {
    case 'navigate':
      navigate(btn.dataset.target);
      break;
    case 'back-to':
      navigate(btn.dataset.target);
      break;
    case 'onboarding-next':
      navigate(btn.dataset.target);
      break;
    case 'save-name': {
      const v = document.getElementById('input-name').value.trim();
      if (v) state.user.name = v;
      saveState();
      navigate('onboarding-iam');
      break;
    }
    case 'save-iam': {
      const v = document.getElementById('input-iam').value.trim();
      if (v && v !== 'I AM') state.user.iAm = v;
      saveState();
      navigate('onboarding-rhythm');
      break;
    }
    case 'save-rhythm':
      state.user.rhythm.morning = document.getElementById('select-morning').value;
      state.user.rhythm.midday = document.getElementById('select-midday').value;
      state.user.rhythm.evening = document.getElementById('select-evening').value;
      state.initialized = true;
      saveState();
      navigate('today');
      maybeShowInstallHint();
      break;
    case 'next-step':
      nextStep(btn.dataset.current, btn.dataset.next);
      // Auto-prep step 3 of morning with contemplation
      if (btn.dataset.next === 'morning-step-3') {
        const existing = getCurrentContemplation();
        if (existing) showContemplation(existing);
        else rerollContemplation();
      }
      break;
    case 'save-today-iam': {
      const v = document.getElementById('input-today-iam').value.trim();
      if (v) state.today.iAm = v;
      saveState();
      nextStep('morning-step-2', 'morning-step-3');
      const existing = getCurrentContemplation();
      if (existing) showContemplation(existing);
      else rerollContemplation();
      break;
    }
    case 'reroll-contemplation':
      rerollContemplation();
      break;
    case 'complete-morning':
      completeMorning();
      break;
    case 'complete-midday':
      completeMidday();
      break;
    case 'complete-evening':
      completeEvening();
      break;
    case 'back-from-settings':
      navigate('today');
      break;
    case 'save-settings':
      state.user.name = document.getElementById('settings-name').value.trim() || state.user.name;
      const newIam = document.getElementById('settings-iam').value.trim();
      if (newIam) state.user.iAm = newIam;
      state.user.rhythm.morning = document.getElementById('settings-morning').value;
      state.user.rhythm.midday = document.getElementById('settings-midday').value;
      state.user.rhythm.evening = document.getElementById('settings-evening').value;
      saveState();
      navigate('today');
      break;
    case 'reset-app':
      if (confirm('This will delete all data and return the app to first launch. Continue?')) {
        resetState();
        location.reload();
      }
      break;
    case 'dismiss-hint':
      document.getElementById('install-hint').classList.add('hidden');
      state.ui.seenInstallHint = true;
      saveState();
      break;
  }
}

// ============== INSTALL HINT ==============

function maybeShowInstallHint() {
  // Show only on iOS Safari (where there's no automatic prompt) and only once
  const isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
  if (isiOS && !isStandalone && !state.ui.seenInstallHint) {
    setTimeout(() => {
      document.getElementById('install-hint').classList.remove('hidden');
    }, 3000);
  }
}

// ============== INITIALIZATION ==============

function init() {
  applyPeriod();

  // Update period every minute
  setInterval(applyPeriod, 60000);

  // Render I AM suggestions for onboarding
  renderIamSuggestions(
    document.querySelector('#onboarding-iam .iam-suggestions'),
    (v) => {
      document.getElementById('input-iam').value = v;
    }
  );

  setupActions();
  setupBreathCircles();

  // After splash, decide where to go
  setTimeout(() => {
    if (state.initialized) {
      navigate('today');
      maybeShowInstallHint();
    } else {
      navigate('onboarding-welcome');
    }
  }, 2000);

  // Register service worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('service-worker.js').catch(err => {
        console.log('Service worker registration failed:', err);
      });
    });
  }
}

// Start
init();
