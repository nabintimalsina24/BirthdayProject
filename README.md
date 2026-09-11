# Kriti's Birthday Website — Setup & Hosting Guide

## 1. Folder structure (already done for you)

```
kriti-birthday/
├── index.html
├── style.css
├── script.js
├── README.md
├── images/
│   ├── kriti-main.jpg   ← hero photo (main card)
│   ├── kriti-2.jpg      ← memory section photo
│   └── kriti-3.jpg      ← memory section photo
└── birthday-music.mp3   ← YOU add this (see step 2)
```

All three of Kriti's photos you sent are already placed and wired up:
- **kriti-main.jpg** is the big photo in the arched frame on the main birthday card.
- **kriti-2.jpg** and **kriti-3.jpg** sit side by side in the "A Little Memory" section further down.

## 2. Add the birthday music

1. Find or export any MP3 you want to use (keep it under ~5MB so the page stays fast).
2. Rename the file exactly to: `birthday-music.mp3`
3. Drop it directly inside the `kriti-birthday` folder, next to `index.html`.
4. The button will not play anything until you do this — that's expected, and it won't break the page (it just shows "Add birthday-music.mp3 to play" if it's missing).

## 3. Test it locally in Chrome

1. Open the `kriti-birthday` folder on your computer.
2. Double-click `index.html` — it opens directly in Chrome.
3. Click "Open Your Surprise 🎁" and go through every section: message, "There's Something More", Make a Wish, music button, and the final surprise.
4. Resize the Chrome window (or open DevTools → toggle device toolbar, Ctrl+Shift+M) to check it on a simulated phone screen.

**Common issues:**
- *Photos don't show* → make sure the `images` folder is in the same place as `index.html` and the filenames match exactly (case-sensitive on GitHub Pages).
- *Music button does nothing* → the mp3 file is missing or misnamed; check step 2.
- *Blank page* → open DevTools Console (F12) and check for a red error; it's almost always a file path typo.

## 4. Deploy for free with GitHub Pages

1. **Create a GitHub account** at github.com if you don't have one.
2. **Create a new repository:**
   - Click the "+" icon top-right → "New repository."
   - Name it `kriti-birthday`.
   - Set it to **Public**.
   - Click "Create repository."
3. **Upload your files:**
   - On the repo page, click "Add file" → "Upload files."
   - Drag in `index.html`, `style.css`, `script.js`, the `images` folder, and `birthday-music.mp3`.
   - Scroll down and click "Commit changes."
4. **Enable GitHub Pages:**
   - Go to the repo's "Settings" tab.
   - Click "Pages" in the left sidebar.
   - Under "Branch," choose `main` and folder `/ (root)`, then click "Save."
   - Wait about 1–2 minutes.
5. **Get your public URL:**
   - Refresh the Pages settings screen — it will show a link like:
     `https://yourusername.github.io/kriti-birthday/`
   - That's the link you'll send to Kriti.
6. **Test from your phone:**
   - Open that link in your phone's browser (not the GitHub app) to confirm photos, animations, and the music button all work.

## 5. Send it to Kriti on Instagram

1. Copy the GitHub Pages URL.
2. Open Instagram → go to your DM conversation with Kriti.
3. Paste the link as a normal message and send.
4. When she taps it, it opens directly in her phone's browser — no app download, no login, no account needed.
