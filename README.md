# Jeevitha R — Student Portfolio

A responsive student portfolio website built with plain HTML, CSS and JavaScript.

## Folder structure

```text
Jeevitha-Portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   └── Jeevitha-R-Resume.pdf
└── README.md
```

## Run in VS Code with Live Server

1. Extract `Jeevitha-Portfolio.zip`.
2. Open Visual Studio Code.
3. Select **File → Open Folder** and choose the extracted `Jeevitha-Portfolio` folder.
4. Open Extensions (`Ctrl + Shift + X`).
5. Search for **Live Server** and install it.
6. Open `index.html`.
7. Right-click inside the file and select **Open with Live Server**.
8. Your portfolio opens in the browser. Save edits and the browser refreshes automatically.

## Personalise before publishing

### 1. Add contact links
Open `js/script.js` and replace the empty values in the `CONTACT` object:

```js
const CONTACT = {
  email: "your-email@example.com",
  github: "https://github.com/your-username",
  linkedin: "https://www.linkedin.com/in/your-profile/"
};
```

### 2. Update your resume
The included PDF is a starter resume using only information confirmed so far. Replace it with your final resume when ready, keeping the same filename:
`assets/Jeevitha-R-Resume.pdf`

### 3. Update project status
The Smart Water Pipe Leakage Detection project is marked **In Progress**. The Mood Tracker and MediWise concepts are marked as ideas discussed, not completed projects. Update or remove them as appropriate.

### 4. Add certificate evidence
The Python Programming course from Infosys Springboard and college hackathon participation certificate are listed because you confirmed receiving them. Add certificate images or verification links only if you want to share them.

## Notes

- No awards, internship, GPA, graduation year, email, GitHub URL or LinkedIn URL have been invented.
- The site uses Google Fonts when an internet connection is available; it falls back to system fonts otherwise.
- The resume is a starter document and should be updated with your contact details and any additional verified information before sending it to recruiters.
