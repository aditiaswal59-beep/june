# 🗓️ June Grind Plan — Daily Tracker

A personal daily routine tracker built for June 2026. It's a clean, no-framework web app that helps you stay consistent with your study, fitness, skincare, job search, and self-care goals — one day at a time.

---

## ✨ Features

- **Mini Calendar** — Browse all 30 days of June and jump to any date instantly
- **Day Tabs** — Quick navigation across Mon–Sun weekly schedule views
- **Daily Checklist** — Time-blocked tasks per day with category tags (DATA, DSA, FITNESS, SKIN, JOB, FOOD, REST, SLEEP, etc.)
- **Progress Bar** — Live task completion counter and percentage for the selected day
- **Streak Counter 🔥** — Tracks how many days you've completed 100% of your tasks
- **Day Complete Banner 🎉** — Celebratory message when all tasks for a day are ticked off
- **Persistent State** — Progress is saved to `localStorage`, so refreshing the page won't lose your check-ins
- **Reset Button** — Clears the current day's checklist if you want a fresh start

---

## 📅 Weekly Schedule Overview

Each day has a fully structured routine covering:

| Tag | Category |
|---|---|
| `SKIN` | Morning & night skincare |
| `FITNESS` | Strength workouts, walks (10k steps target) |
| `DATA` | Data Analyst study & project deep dives |
| `DSA` | Data Structures & Algorithms practice |
| `APT` | Aptitude / problem-solving sessions |
| `JOB` | Job applications, cold emails, outreach planning |
| `FOOD` | Breakfast, lunch, dinner |
| `REST` | Scheduled breaks |
| `FREE` | Personal free time |
| `TEMPLE` | Tuesday temple visits (doubles as step count) |
| `SLEEP` | Sleep by 11 PM target |

Wednesdays are lighter with a genuinely free afternoon. Sundays are reserved for weekly review, GitHub commits, and meal prep.

---

## 🗂️ Project Structure

```
june-grind-plan/
├── index.html   # App structure and layout
├── style.css    # All styling (dark theme, custom fonts)
└── script.js    # All logic — calendar, checklist, streak, localStorage
```

---

## 🚀 Getting Started

No build tools, no dependencies, no install needed.

1. Clone or download this repo
2. Open `index.html` in your browser

That's it.

```bash
git clone https://github.com/your-username/june-grind-plan.git
cd june-grind-plan
open index.html
```

---

## 💾 How Data Is Stored

All progress is saved in the browser's `localStorage` under keys formatted as:

```
june2026:{date}:{day}   →  task check states (JSON)
june2026:streak          →  current streak count
june2026:streak:{date}   →  flag to avoid double-counting a day
```

No backend, no account, no data leaves your device.

---

## 🛠️ Built With

- Vanilla HTML, CSS, JavaScript — zero frameworks
- [Syne](https://fonts.google.com/specimen/Syne), [DM Mono](https://fonts.google.com/specimen/DM+Mono), [Instrument Sans](https://fonts.google.com/specimen/Instrument+Sans) via Google Fonts
- `localStorage` for persistence

---

## 🙋 Why I Built This

June 2026 is a focused month — studying for a Data Analyst role, grinding DSA and aptitude, applying for jobs, and staying healthy. Instead of using a generic habit tracker, I built one tailored exactly to my schedule so there's no friction between planning and doing.

---

## 📌 Notes

- The tracker is designed specifically for **June 2026**. Dates outside of June default to June 1st's schedule.
- To reuse for a different month, update the `TASKS` object and date logic in `script.js`.
-
