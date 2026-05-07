# How to Deploy the Practice App
## A simple guide — for Constantin's son

This is the **Conscious Creation Practice App** — a working PWA (Progressive Web App). Open in a browser, install to home screen, use as a real app. Works on iPhone, Android, and desktop.

The app is fully built. You just need to put these files on the internet so people can reach them.

---

## Quick Path — Live in 10 minutes

### Option A — Netlify (easiest, free)

1. Go to **netlify.com** → sign up (Google account works)
2. From the dashboard, click **"Add new site" → "Deploy manually"**
3. **Drag the entire `practice-app` folder** into the upload zone
4. Wait 30 seconds. The site is live at a random URL like `inspiring-marie-12345.netlify.app`
5. Open that URL on your phone, or send it to your dad — **it already works as a PWA**
6. To install: open the URL in Safari (iPhone) or Chrome (Android), then:
   - **iPhone:** tap Share → "Add to Home Screen"
   - **Android:** tap menu → "Install app" or "Add to home screen"

That's it. The app is on the phone, looks and behaves like a native app.

### Option B — Connect to consciouscreation.art

When ready to use the real domain:

1. In your hosting platform (Netlify, Vercel, etc.) → **Domain management** → Add custom domain
2. Add `app.consciouscreation.art` as a subdomain
3. The platform will give you DNS records to add in **world4you** (where the domain is registered):
   - Typically a `CNAME` record pointing `app` to your hosting provider
4. Wait 1-24 hours for DNS to propagate
5. SSL is automatic (Let's Encrypt)
6. Now the app lives at `https://app.consciouscreation.art`

---

## File Structure

```
/practice-app
  ├── index.html           The app shell (all screens)
  ├── styles.css           The full design system
  ├── app.js               All logic, content, routing
  ├── manifest.json        PWA manifest (makes it installable)
  ├── service-worker.js    Caches the app for offline use
  ├── favicon.svg          Browser tab icon
  ├── icon-192.png         Home screen icon (small)
  ├── icon-512.png         Home screen icon (large)
  └── DEPLOYMENT_GUIDE.md  This file
```

**No build step. No npm install. No bundler.** Just static files. Drop them anywhere.

---

## Testing Before Deploying

Want to run it locally before deploying?

```bash
cd practice-app
python3 -m http.server 8000
```

Open `http://localhost:8000` in any browser. Works fully — including the service worker (PWAs require HTTPS or localhost; localhost is whitelisted).

---

## How the App Works

### Storage
Uses **localStorage** in the browser. Each device is independent — no accounts, no sync. Constantin's mom on her iPhone has her own data; his sister on her Android has hers. Nothing is sent to any server.

### Time-of-day awareness
The app reads the device's local time and shifts its visual mood:
- 5am – 11am: morning (cream + gold)
- 11am – 5pm: midday (paper + gold)
- 5pm – 8pm: evening (transitional)
- 8pm – 5am: night (deep indigo + gold-light)

The transitions happen automatically as the user opens the app at different times.

### Practice flow
- **First launch**: 3-step onboarding (name, first I AM, rhythm preferences)
- **Today**: home screen showing the current/next practice
- **Morning Anchor**: 3-step ritual (breath, set I AM, receive contemplation)
- **Midday Pause**: short prompt + breath
- **Evening Release**: 3-step ritual (bless, release, sleep)
- **Library**: all teachings from the booklet (3 foundations + 7 teachings + 7 diversions)
- **Letters**: from Constantin (sample placeholder + welcome letter)
- **Path**: recognitions tracker (days walked, week calendar, stages)
- **Settings**: edit name, I AM, rhythm preferences

### Recognitions
The app tracks days walked. **No streaks. No shaming.** Missed days appear as soft circles. The metric is total days walked, not consecutive. This is by design — non-negotiable per the brand book.

---

## What's NOT Yet Built (for v0.1 beta)

Things to add in future iterations based on tester feedback:

- **Audio for letters** — currently text only. When Constantin records audio, drop the MP3 files into a folder and update the letters array in `app.js`
- **Push notifications** — gentle morning/evening reminders. PWA notifications are tricky cross-platform; would add 2-3 days of work
- **Account creation / sync across devices** — currently each device is standalone
- **Subscription / paywall** — currently 100% free for beta
- **Search within library** — currently you scroll
- **Add new letters via CMS** — currently letters are hardcoded in `app.js`. Editing them = editing the JS file

For a beta with a small group of testers, none of these are urgent. The core experience works.

---

## Where to Make Changes

### Add or edit a letter
Open `app.js`, find the `SAMPLE_LETTERS` array near the top. Add a new object with the same shape as the existing ones.

### Edit a teaching
Open `app.js`, find the `TEACHINGS` object. Each teaching has an `id`, `title`, `decree`, and `body` (an array of paragraphs).

### Change colors
Open `styles.css`. The CSS variables at the top of the file (`--indigo`, `--gold`, etc.) control everything. Change them once, the whole app updates.

### Change the app name
Open `manifest.json`. Edit `name` and `short_name`.

---

## How to Send the App to Beta Testers

Once the app is live (e.g. at `https://app.consciouscreation.art`):

**Send a message like this to each tester:**

> Hi —
> 
> Here's the link to the new Conscious Creation Practice App: **https://app.consciouscreation.art**
> 
> **On iPhone:**
> 1. Open the link in **Safari** (not Chrome — Apple requires Safari for installation)
> 2. Tap the **Share** button (the box with an arrow)
> 3. Scroll down, tap **"Add to Home Screen"**
> 4. The app icon will appear on your home screen — tap it to open
> 
> **On Android:**
> 1. Open the link in **Chrome**
> 2. Tap the **menu** (three dots, top right)
> 3. Tap **"Install app"** or **"Add to Home screen"**
> 4. The app icon appears on your home screen
> 
> Once installed, it works like a regular app — full screen, no browser bar, even works offline. 
> 
> This is a beta — feedback welcome.

---

## Troubleshooting

**"The install option doesn't appear"**
- iPhone: must use Safari, not Chrome
- Android: must use Chrome, not Samsung Internet
- Service worker requires HTTPS — Netlify provides this automatically

**"It asks me to log in"**
- It shouldn't. There are no accounts. Reset and try again.

**"Nothing happens when I tap Begin"**
- Try Safari/Chrome (not Firefox or in-app browsers)
- Hard refresh: long-press refresh button, "Empty cache and reload"

**"The fonts look weird"**
- Fonts load from Google Fonts. Requires internet on first visit. Once loaded, cached for offline.

---

## Future Steps (after beta)

1. **Run the beta for 2-4 weeks** with 5-15 trusted testers (mom, sister, friends, a few coaching clients)
2. **Collect feedback** — what's confusing, what's missing, what's loved
3. **Iterate** on the PWA based on feedback (changes are instant — push to host, users get updated version next open)
4. **Once stable**, convert to React Native and submit to App Store + Google Play (see App_Store_Implementation_Guide.md)

---

❖

For questions: **constantincranz@gmail.com**

*The teaching is patient. The app is the companion, not the practice itself.*
