# Premium Mini-Website Template System 🚀

A high-performance, mobile-first one-page website template system designed for Instagram-based local businesses in Pune. Built for speed, premium aesthetics, and high conversion.

## 🛠 Tech Stack
- **React 19 + Vite 6**
- **Tailwind CSS v4** (Utility-first styling)
- **Framer Motion 12** (Premium animations)
- **Lucide React** (Modern iconography)

---

## 🎨 How to create a new client site (Under 20 Mins)

### Step 1: Clone and Install
```bash
# Clone this repo
npm install
```

### Step 2: Customize Client Data
Open `src/data/clientConfig.js`. This is the only file you need to touch.
- Duplicate an existing niche block or edit the `bridal_makeup` one.
- Update the **Business Name**, **WhatsApp Number**, and **Niche**.
- Change the **Colors** to match their brand.
- Update **Services**, **Pricing**, and **Gallery** (Use high-quality Unsplash links or host their photos on Imgur/Cloudinary).

### Step 3: Local Review
```bash
npm run dev
```
- Open `http://localhost:5173`
- Check all WhatsApp links (use the demo switcher to view your specific niche).
- Ensure the "Reduced Motion" accessibility works.

### Step 4: Build for Production
```bash
npm run build
```
This generates a `dist/` folder. It's extremely lightweight (~113kb).

### Step 5: Deploy
- **Netlify:** Drag and drop the `dist/` folder.
- **Vercel:** `vercel --prod`
- **GitHub Pages:** Use the standard Vite deployment guide.

---

## 📁 Project Structure
- `/src/data/clientConfig.js`: **The "Control Center" for all business content.**
- `/src/components/`: Reusable premium UI components.
- `/src/App.jsx`: Master layout and logic.
- `CLIENT-INFO-COLLECTION.md`: Send this to clients to get their data.
- `BEFORE-DELIVERY-CHECKLIST.md`: Use this to QA the site before sending the link.
- `CLIENT-HANDOVER-MESSAGE.md`: Copy-paste this message to the client on delivery.

---

## 💡 Conversion Features Included
- **Sticky WhatsApp CTA:** Stays at the bottom right for easy access.
- **Contextual Prefilled Messages:** WhatsApp links automatically include the service name the user was looking at.
- **Bento Gallery:** Premium-feel portfolio layout.
- **Micro-interactions:** Hover and tap feedback on every button.
- **Google Maps Integration:** Embedded map for local trust.

---
*Created for senior designers and high-ticket freelancers.*
