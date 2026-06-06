/* ── DATA ────────────────────────────────────────────────── */
const TASKS = {
  Mon: [
    { id: "skin_am",   tag: "SKIN",    time: "7:00 AM",  label: "Morning Skincare" },
    { id: "workout",   tag: "FITNESS", time: "7:15 AM",  label: "Workout — 45–60 min (Strength)" },
    { id: "breakfast", tag: "FOOD",    time: "8:15 AM",  label: "Breakfast" },
    { id: "apt",       tag: "APT",     time: "8:45 AM",  label: "Aptitude — 30 min" },
    { id: "data",      tag: "DATA",    time: "9:15 AM",  label: "Data Analyst Study — 2 hrs" },
    { id: "break1",    tag: "REST",    time: "11:15 AM", label: "Break — 30 min" },
    { id: "dsa",       tag: "DSA",     time: "11:45 AM", label: "DSA Practice — 2 hrs" },
    { id: "lunch",     tag: "FOOD",    time: "1:45 PM",  label: "Lunch — 45 min" },
    { id: "job",       tag: "JOB",     time: "2:30 PM",  label: "Job Applications — 2 hrs" },
    { id: "break2",    tag: "REST",    time: "4:30 PM",  label: "Break — 30 min" },
    { id: "data2",     tag: "DATA",    time: "5:00 PM",  label: "Data Review — 1 hr" },
    { id: "walk",      tag: "FITNESS", time: "6:00 PM",  label: "10k Steps Walk — 1 hr" },
    { id: "dinner",    tag: "FOOD",    time: "7:00 PM",  label: "Dinner" },
    { id: "dsa2",      tag: "DSA",     time: "7:45 PM",  label: "DSA Review / Aptitude — 1 hr" },
    { id: "free",      tag: "FREE",    time: "8:45 PM",  label: "Free Time — 1.5 hrs" },
    { id: "skin_pm",   tag: "SKIN",    time: "10:15 PM", label: "Night Skincare" },
    { id: "sleep",     tag: "SLEEP",   time: "11:00 PM", label: "Sleep by 11 PM" },
  ],
  Tue: [
    { id: "skin_am",   tag: "SKIN",    time: "7:00 AM",  label: "Morning Skincare" },
    { id: "workout",   tag: "FITNESS", time: "7:15 AM",  label: "Workout — 45–60 min" },
    { id: "breakfast", tag: "FOOD",    time: "8:15 AM",  label: "Breakfast" },
    { id: "apt",       tag: "APT",     time: "8:45 AM",  label: "Aptitude — 30 min" },
    { id: "data",      tag: "DATA",    time: "9:15 AM",  label: "Data Study — 2 hrs" },
    { id: "break1",    tag: "REST",    time: "11:15 AM", label: "Break — 30 min" },
    { id: "dsa",       tag: "DSA",     time: "11:45 AM", label: "DSA Practice — 2 hrs" },
    { id: "lunch",     tag: "FOOD",    time: "1:45 PM",  label: "Lunch" },
    { id: "job",       tag: "JOB",     time: "2:30 PM",  label: "Job Applications — 2 hrs" },
    { id: "ready",     tag: "REST",    time: "4:30 PM",  label: "Get ready for Temple — 30 min" },
    { id: "temple",    tag: "TEMPLE",  time: "5:00 PM",  label: "🛕 Temple Visit — 1 hr (= 10k steps)" },
    { id: "dinner",    tag: "FOOD",    time: "6:00 PM",  label: "Dinner" },
    { id: "data2",     tag: "DATA",    time: "6:45 PM",  label: "Data Review — 1 hr" },
    { id: "dsa2",      tag: "DSA",     time: "7:45 PM",  label: "DSA Review — 45 min" },
    { id: "free",      tag: "FREE",    time: "8:30 PM",  label: "Free Time — 1.5 hrs" },
    { id: "skin_pm",   tag: "SKIN",    time: "10:15 PM", label: "Night Skincare" },
    { id: "sleep",     tag: "SLEEP",   time: "11:00 PM", label: "Sleep by 11 PM" },
  ],
  Wed: [
    { id: "skin_am",   tag: "SKIN",    time: "7:00 AM",  label: "Morning Skincare" },
    { id: "workout",   tag: "FITNESS", time: "7:15 AM",  label: "Light Workout — 45 min" },
    { id: "breakfast", tag: "FOOD",    time: "8:00 AM",  label: "Breakfast" },
    { id: "data",      tag: "DATA",    time: "8:30 AM",  label: "Data Review & Consolidate — 1.5 hrs" },
    { id: "break1",    tag: "REST",    time: "10:00 AM", label: "Break — 30 min" },
    { id: "dsa",       tag: "DSA",     time: "10:30 AM", label: "DSA Review — 1 hr" },
    { id: "job",       tag: "JOB",     time: "11:30 AM", label: "Follow-ups + Research — 1 hr" },
    { id: "lunch",     tag: "FOOD",    time: "12:30 PM", label: "Lunch" },
    { id: "free",      tag: "FREE",    time: "1:15 PM",  label: "Free Afternoon — truly off" },
    { id: "walk",      tag: "FITNESS", time: "5:00 PM",  label: "10k Steps Walk — 1 hr" },
    { id: "dinner",    tag: "FOOD",    time: "6:00 PM",  label: "Dinner" },
    { id: "skin_pm",   tag: "SKIN",    time: "10:15 PM", label: "Night Skincare" },
    { id: "sleep",     tag: "SLEEP",   time: "11:00 PM", label: "Sleep by 11 PM" },
  ],
  Thu: [
    { id: "skin_am",   tag: "SKIN",    time: "7:00 AM",  label: "Morning Skincare" },
    { id: "workout",   tag: "FITNESS", time: "7:15 AM",  label: "Workout — 45–60 min (Strength)" },
    { id: "breakfast", tag: "FOOD",    time: "8:15 AM",  label: "Breakfast" },
    { id: "apt",       tag: "APT",     time: "8:45 AM",  label: "Aptitude — 30 min" },
    { id: "data",      tag: "DATA",    time: "9:15 AM",  label: "Data Analyst Study — 2 hrs" },
    { id: "break1",    tag: "REST",    time: "11:15 AM", label: "Break — 30 min" },
    { id: "dsa",       tag: "DSA",     time: "11:45 AM", label: "DSA Practice — 2 hrs" },
    { id: "lunch",     tag: "FOOD",    time: "1:45 PM",  label: "Lunch — 45 min" },
    { id: "job",       tag: "JOB",     time: "2:30 PM",  label: "Job Applications — 2 hrs" },
    { id: "break2",    tag: "REST",    time: "4:30 PM",  label: "Break — 30 min" },
    { id: "data2",     tag: "DATA",    time: "5:00 PM",  label: "Data Review — 1 hr" },
    { id: "walk",      tag: "FITNESS", time: "6:00 PM",  label: "10k Steps Walk — 1 hr" },
    { id: "dinner",    tag: "FOOD",    time: "7:00 PM",  label: "Dinner" },
    { id: "dsa2",      tag: "DSA",     time: "7:45 PM",  label: "DSA Review / Aptitude — 1 hr" },
    { id: "free",      tag: "FREE",    time: "8:45 PM",  label: "Free Time — 1.5 hrs" },
    { id: "skin_pm",   tag: "SKIN",    time: "10:15 PM", label: "Night Skincare" },
    { id: "sleep",     tag: "SLEEP",   time: "11:00 PM", label: "Sleep by 11 PM" },
  ],
  Fri: [
    { id: "skin_am",   tag: "SKIN",    time: "7:00 AM",  label: "Morning Skincare" },
    { id: "workout",   tag: "FITNESS", time: "7:15 AM",  label: "Workout — 45–60 min (Strength)" },
    { id: "breakfast", tag: "FOOD",    time: "8:15 AM",  label: "Breakfast" },
    { id: "apt",       tag: "APT",     time: "8:45 AM",  label: "Aptitude — 30 min" },
    { id: "data",      tag: "DATA",    time: "9:15 AM",  label: "Data Analyst Study — 2 hrs" },
    { id: "break1",    tag: "REST",    time: "11:15 AM", label: "Break — 30 min" },
    { id: "dsa",       tag: "DSA",     time: "11:45 AM", label: "DSA Practice — 2 hrs" },
    { id: "lunch",     tag: "FOOD",    time: "1:45 PM",  label: "Lunch — 45 min" },
    { id: "job",       tag: "JOB",     time: "2:30 PM",  label: "Job Applications — 2 hrs" },
    { id: "break2",    tag: "REST",    time: "4:30 PM",  label: "Break — 30 min" },
    { id: "data2",     tag: "DATA",    time: "5:00 PM",  label: "Data Review — 1 hr" },
    { id: "walk",      tag: "FITNESS", time: "6:00 PM",  label: "10k Steps Walk — 1 hr" },
    { id: "dinner",    tag: "FOOD",    time: "7:00 PM",  label: "Dinner" },
    { id: "dsa2",      tag: "DSA",     time: "7:45 PM",  label: "DSA Review / Aptitude — 1 hr" },
    { id: "free",      tag: "FREE",    time: "8:45 PM",  label: "Free Time — 1.5 hrs" },
    { id: "skin_pm",   tag: "SKIN",    time: "10:15 PM", label: "Night Skincare" },
    { id: "sleep",     tag: "SLEEP",   time: "11:00 PM", label: "Sleep by 11 PM" },
  ],
  Sat: [
    { id: "skin_am",   tag: "SKIN",    time: "7:00 AM",  label: "Morning Skincare" },
    { id: "workout",   tag: "FITNESS", time: "7:15 AM",  label: "Best Workout — 60 min" },
    { id: "breakfast", tag: "FOOD",    time: "8:15 AM",  label: "Breakfast" },
    { id: "data",      tag: "DATA",    time: "8:45 AM",  label: "Project / Deep Dive — 3 hrs" },
    { id: "break1",    tag: "REST",    time: "11:45 AM", label: "Break — 30 min" },
    { id: "job",       tag: "JOB",     time: "12:15 PM", label: "Batch Cold Emails — 1.5 hrs" },
    { id: "lunch",     tag: "FOOD",    time: "1:45 PM",  label: "Lunch" },
    { id: "dsa",       tag: "DSA",     time: "2:30 PM",  label: "DSA — 1.5 hrs" },
    { id: "free",      tag: "FREE",    time: "4:00 PM",  label: "Free Time from 4 PM" },
    { id: "walk",      tag: "FITNESS", time: "5:00 PM",  label: "10k Steps Walk" },
    { id: "skin_pm",   tag: "SKIN",    time: "10:15 PM", label: "Night Skincare" },
    { id: "sleep",     tag: "SLEEP",   time: "11:00 PM", label: "Sleep by 11 PM" },
  ],
  Sun: [
    { id: "skin_am",   tag: "SKIN",    time: "7:00 AM",  label: "Morning Skincare" },
    { id: "walk_am",   tag: "FITNESS", time: "7:15 AM",  label: "Morning Walk — 45 min" },
    { id: "breakfast", tag: "FOOD",    time: "8:00 AM",  label: "Breakfast — slow & enjoyed" },
    { id: "data",      tag: "DATA",    time: "9:00 AM",  label: "Weekly Review + GitHub commit — 1 hr" },
    { id: "job",       tag: "JOB",     time: "10:00 AM", label: "Job Outreach Planning — 45 min" },
    { id: "free",      tag: "FREE",    time: "10:45 AM", label: "Free + Meal Prep" },
    { id: "walk",      tag: "FITNESS", time: "5:00 PM",  label: "Evening Walk — finish 10k steps" },
    { id: "dinner",    tag: "FOOD",    time: "6:00 PM",  label: "Dinner" },
    { id: "dsa",       tag: "DSA",     time: "6:45 PM",  label: "Light DSA / Aptitude — 45 min" },
    { id: "skin_pm",   tag: "SKIN",    time: "10:15 PM", label: "Night Skincare" },
    { id: "sleep",     tag: "SLEEP",   time: "11:00 PM", label: "Sleep by 11 PM" },
  ],
};

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// June 1 2026 = Monday. Day-of-week map for each date 1–30
function getDayName(date) {
  // June 1 = Mon (index 0 in DAYS)
  return DAYS[(date - 1) % 7];
}

function getTodayDay() {
  const map = { 0:"Sun", 1:"Mon", 2:"Tue", 3:"Wed", 4:"Thu", 5:"Fri", 6:"Sat" };
  return map[new Date().getDay()];
}

function getTodayDate() {
  const now = new Date();
  return now.getMonth() === 5 ? now.getDate() : 1; // 5 = June
}

function storageKey(day, date) {
  return `june2026:${date}:${day}`;
}

/* ── STATE ───────────────────────────────────────────────── */
let selectedDate = getTodayDate();
let selectedDay  = getDayName(selectedDate);
let checked      = {};
let streak       = parseInt(localStorage.getItem("june2026:streak") || "0");

/* ── INIT ────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  renderCalendar();
  renderTabs();
  loadAndRender();

  document.getElementById("reset-btn").addEventListener("click", () => {
    checked = {};
    saveChecked();
    renderChecklist();
    updateProgress();
  });
});

/* ── CALENDAR ────────────────────────────────────────────── */
function renderCalendar() {
  const grid = document.getElementById("calendar-grid");
  grid.innerHTML = "";
  const todayDate = getTodayDate();

  for (let d = 1; d <= 30; d++) {
    const btn = document.createElement("button");
    btn.className = "cal-btn";
    btn.textContent = d;

    if (d === selectedDate) btn.classList.add("selected");
    else if (d === todayDate) btn.classList.add("today");

    btn.addEventListener("click", () => {
      selectedDate = d;
      selectedDay  = getDayName(d);
      loadAndRender();
      renderCalendar();
      renderTabs();
      updateHeader();
    });

    grid.appendChild(btn);
  }
}

/* ── TABS ────────────────────────────────────────────────── */
function renderTabs() {
  const container = document.getElementById("day-tabs");
  container.innerHTML = "";

  DAYS.forEach(day => {
    const btn = document.createElement("button");
    btn.className = "tab-btn" + (day === selectedDay ? " active" : "");
    btn.textContent = day;
    btn.addEventListener("click", () => {
      selectedDay = day;
      renderTabs();
      renderChecklist();
      updateProgress();
      updateHeader();
    });
    container.appendChild(btn);
  });
}

/* ── HEADER ──────────────────────────────────────────────── */
function updateHeader() {
  document.getElementById("header-title").textContent =
    `${selectedDay} · Jun ${selectedDate}`;
  document.getElementById("streak-value").textContent = `🔥 ${streak}`;
}

/* ── LOAD + RENDER ───────────────────────────────────────── */
function loadAndRender() {
  const key   = storageKey(selectedDay, selectedDate);
  const saved = localStorage.getItem(key);
  checked     = saved ? JSON.parse(saved) : {};
  renderChecklist();
  updateProgress();
  updateHeader();
}

/* ── CHECKLIST ───────────────────────────────────────────── */
function renderChecklist() {
  const container = document.getElementById("checklist");
  container.innerHTML = "";
  const tasks = TASKS[selectedDay] || [];

  tasks.forEach(task => {
    const isDone = !!checked[task.id];

    const row = document.createElement("button");
    row.className = "task-row" + (isDone ? " checked" : "");

    row.innerHTML = `
      <div class="checkbox">
        <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
          <path d="M1 5L4.5 8.5L11 1.5"
            stroke="#0a0a0f" stroke-width="2.2"
            stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="task-content">
        <div class="task-meta">
          <span class="tag tag-${task.tag}">${task.tag}</span>
          <span class="task-time">${task.time}</span>
        </div>
        <div class="task-label">${task.label}</div>
      </div>
    `;

    row.addEventListener("click", () => toggleTask(task.id));
    container.appendChild(row);
  });
}

/* ── TOGGLE ──────────────────────────────────────────────── */
function toggleTask(taskId) {
  checked[taskId] = !checked[taskId];
  saveChecked();
  renderChecklist();
  updateProgress();
}

/* ── SAVE ────────────────────────────────────────────────── */
function saveChecked() {
  const key = storageKey(selectedDay, selectedDate);
  localStorage.setItem(key, JSON.stringify(checked));
}

/* ── PROGRESS ────────────────────────────────────────────── */
function updateProgress() {
  const tasks    = TASKS[selectedDay] || [];
  const done     = tasks.filter(t => checked[t.id]).length;
  const total    = tasks.length;
  const pct      = total > 0 ? Math.round((done / total) * 100) : 0;
  const complete = pct === 100;

  document.getElementById("progress-count").textContent = `${done} / ${total} tasks`;

  const pctEl = document.getElementById("progress-pct");
  pctEl.textContent  = complete ? "✓ DAY COMPLETE" : `${pct}%`;
  pctEl.className    = complete ? "done" : "";

  const fill = document.getElementById("progress-fill");
  fill.style.width   = pct + "%";
  fill.className     = "progress-fill" + (complete ? " done" : "");

  // Banner
  const banner = document.getElementById("complete-banner");
  if (complete) {
    banner.classList.remove("hidden");
    document.getElementById("complete-sub").textContent =
      `You crushed ${selectedDay} · Jun ${selectedDate}. Sleep and do it again.`;
    // Streak
    const streakKey = `june2026:streak:${selectedDate}`;
    if (!localStorage.getItem(streakKey)) {
      streak++;
      localStorage.setItem(streakKey, "1");
      localStorage.setItem("june2026:streak", streak);
      document.getElementById("streak-value").textContent = `🔥 ${streak}`;
    }
  } else {
    banner.classList.add("hidden");
  }
}
