# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.


File Structure

src/
├── components/
│   ├── Navbar.js
│   ├── TimeCapsuleForm.js
│   ├── Dashboard.js
│   ├── CapsuleCard.js
│   └── styles/
│       ├── Navbar.css
│       ├── TimeCapsuleForm.css
│       ├── Dashboard.css
│       ├── CapsuleCard.css
├── pages/
│   ├── Home.js
│   ├── Login.js
│   ├── Register.js
│   ├── Profile.js
│   └── styles/
│       ├── Home.css
│       ├── Login.css
│       ├── Register.css
│       ├── Profile.css
├── App.js
└── styles/
    └── global.css


Flow from index.js

index.js -> App.js
            ├── Navbar.js
            │    └── Navbar.css
            ├── Home.js
            │    └── Home.css
            ├── Login.js
            │    ├── firebase.js
            │    └── Login.css
            ├── Register.js
            │    ├── firebase.js
            │    └── Register.css
            └── Profile.js
                 ├── Profile.css
                 ├── TimeCapsuleForm.js
                 │    └── TimeCapsuleForm.css
                 └── Dashboard.js
                      ├── Dashboard.css
                      └── CapsuleCard.js
                           └── CapsuleCard.css
