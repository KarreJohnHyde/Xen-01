# 🚀 XEN-O1 | COMPLETE BASE44 3D WEB DESIGN PROMPT
## ✅ COPY THIS ENTIRE PROMPT INTO BASE44

---

## PROMPT START:

Build a **stunning, ultra-premium 3D animated single-page website** for **XEN-O1** — India's #1 Final Year Project Mentorship Platform for engineering students. This must be a jaw-dropping, futuristic, dark-themed 3D experience that makes students say "WOW" the moment they land on it.

---

## 🏢 COMPANY INFORMATION

- **Brand Name:** XEN-O1
- **Tagline:** "Empowering Innovation, Enabling Excellence"
- **Category:** Final Year Engineering Project Mentorship Platform
- **Target Audience:** B.Tech / B.E. / MCA / M.Tech Final Year Students across India
- **Phone:** +91 95156 67238
- **Email:** xeno1.solutions@gmail.com
- **Instagram:** @the.xen.o1
- **Website:** www.xen-o1.com
- **Key Stats:** 100+ Projects Delivered | 500+ Students Helped | 9+ Domains

---

## 🎨 DESIGN SYSTEM

### Color Palette
- **Background:** `#050810` (deep space black)
- **Primary Gold:** `#C9A84C` (main accent, text highlights, glow)
- **Secondary Gold:** `#F0C04A` (buttons, hover states)
- **Purple Neon:** `#7B2FBE` / `#A855F7` (gradient fills, glow effects)
- **Cyan Electric:** `#00D4FF` (tech borders, shine effects)
- **Dark Card BG:** `#0D1117` (glassmorphism cards)
- **Text Primary:** `#FFFFFF`
- **Text Secondary:** `#A0ADB8`

### Typography (Import from Google Fonts)
```
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;600&display=swap');
```
- **Headings:** Outfit (700–900 weight)
- **Body:** Plus Jakarta Sans (400–600)
- **Code/IDs:** JetBrains Mono

---

## 🌐 SECTION-BY-SECTION BUILD INSTRUCTIONS

---

### SECTION 1: LOADING / INTRO ANIMATION

Build a full-screen intro loader with:
- **Black background** `#050810`
- **Center: "X" logo** — a glowing 3D cube with the letter "X" inside, rotating slowly on Y-axis using CSS `@keyframes rotateY`
- **3 concentric orbiting rings** around the X — gold ring (closest), purple ring (middle), cyan ring (outer) — each rotating at different speeds using CSS 3D transforms
- **Brand name reveal:** "XEN-O1" text typewriters in below the logo (letter by letter, 80ms delay each)
- **Tagline:** "Empowering Innovation, Enabling Excellence" fades up after brand name
- **Progress bar:** Thin gold horizontal bar fills 0% → 100% over 2.5 seconds at bottom
- **Exit animation:** The entire screen splits in half vertically (left panel slides left, right panel slides right) like a vault door opening — revealing the main website
- CSS variables for easy customization

---

### SECTION 2: STICKY GLASSMORPHISM NAVBAR

```css
/* Navbar style */
background: rgba(5, 8, 16, 0.7);
backdrop-filter: blur(20px);
border-bottom: 1px solid rgba(201, 168, 76, 0.2);
```

**Left:** Logo — glowing gold "X" cube icon + "XEN-O1" in Outfit 800 + "PROJECT MENTORSHIP" in small caps below
**Center:** Navigation links — HOME | PROJECTS | DOMAINS | SERVICES | JOURNAL PAPER | BLOG | ABOUT | CONTACT
- Links use `letter-spacing: 1px; font-size: 13px; text-transform: uppercase;`
- Hover: gold underline slides in from left
- Active: gold color + subtle glow
**Right:** 
- "💬 WhatsApp" green pulsing button
- "Contact Us" gold gradient button with magnetic hover effect
**On scroll down:** navbar height shrinks by 20%, blur increases, gold border brightens
**Mobile:** Hamburger icon that morphs into X — sliding drawer menu from right

---

### SECTION 3: HERO SECTION (3D SHOWPIECE)

**Full screen, min-height: 100vh**

**Background Layers (bottom to top):**
1. Animated star field — 300 white dots on `<canvas>` floating at 3 depth layers (parallax on mouse move)
2. Dark mesh grid — CSS perspective grid lines fading to center
3. Two large blurred purple/gold orbs slowly drifting (CSS animation, 8-12 second loops)
4. Gold quantix halo glow at top-center

**Left Content (60% width):**
- Badge: `[ 🎓 India's #1 Project Mentorship Platform ]` — glassmorphism pill with pulsing green dot
- **Giant headline (h1):** 
  ```
  Empowering Innovation,
  Enabling Excellence.
  ```
  Use CSS 3D text-shadow with 8 layers for depth effect — gold gradient text
- **Subtext:** "From concept to deployment — we guide final year engineering students through cutting-edge technology projects with full documentation and research paper support."
- **Trust badges row:** ✅ 100% Original | ⚡ Fast Delivery | 📄 IEEE Support | 🔬 Scopus Indexed
- **CTA Row:** 
  - Primary: "Explore Projects →" (gold gradient bg, slight 3D press on click)
  - Secondary: "Get Free Consultation" (ghost border, white text)

**Right Content (40% width):**
- A rotating 3D wireframe sphere/icosahedron built with CSS or Three.js
- The sphere has gold wireframe lines, glowing at intersections
- Floating around it: glassmorphism stat badges
  - 🏆 500+ Students Helped
  - ⭐ 100+ Projects Delivered  
  - 📘 IEEE Certified
  - 🔬 Scopus Indexed
- Each badge floats with a gentle bobbing animation (translateY, different timing)

**Bottom of Hero:** Smooth wave SVG divider transitioning to next section

---

### SECTION 4: DOMAINS SECTION — WITH REAL 3D PHOTOREALISTIC IMAGES

> **IMPORTANT:** Do NOT use emoji icons or simple Python-style symbols for domains.
> Each domain card must use a **real-world, photorealistic or 3D-rendered image** as the visual centrepiece.
> Use `<img>` tags with the Unsplash CDN URLs below, or generate stunning AI-art style 3D renders via CSS/SVG gradients as fallback.

**Section Title:** "Explore by Domain" — glowing gold 3D text with purple underline
**Subtitle:** "9 cutting-edge technology domains — all with full mentorship"

**Build 9 cards in a 3×3 grid. Each card has:**
- Dark glassmorphism base: `background: rgba(13, 17, 23, 0.8); backdrop-filter: blur(10px);`
- Unique neon border color (see below)
- Mouse-tracking 3D tilt effect: `transform: perspective(1000px) rotateX(Ydeg) rotateY(Xdeg)` — update via JS mousemove
- Domain image fills top 55% of card (border-radius top corners, no bottom crop)
- Domain name, short description, project count below
- "View Projects →" link at bottom with arrow animation
- On hover: card lifts `translateZ(20px)`, image zooms 1.05x, neon border glows brighter

---

**DOMAIN 1: Artificial Intelligence**
- Neon border color: `#A855F7` (purple)
- Image: A futuristic glowing neural network brain with electric purple connections on dark background — use: `https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=600`
- Short description: "LLMs, GPT-4, Chatbots, Predictive AI"
- Project count: 10 Projects

**DOMAIN 2: Machine Learning**
- Neon border color: `#00D4FF` (cyan)
- Image: 3D holographic data charts and ML model training visualization — use: `https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600`
- Short description: "XGBoost, Random Forest, Deep Regression"
- Project count: 10 Projects

**DOMAIN 3: Deep Learning**
- Neon border color: `#F97316` (orange)
- Image: Multilayered glowing neural network layers floating in 3D space, deep blue — use: `https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600`
- Short description: "CNN, RNN, LSTM, Transfer Learning"
- Project count: 10 Projects

**DOMAIN 4: Data Science**
- Neon border color: `#22C55E` (green)
- Image: Photorealistic glowing data dashboard with holographic bar charts and world map — use: `https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600`
- Short description: "Pandas, Plotly, Forecasting, EDA"
- Project count: 10 Projects

**DOMAIN 5: Natural Language Processing**
- Neon border color: `#EC4899` (pink)
- Image: Glowing speech bubbles and text tokens floating in a futuristic dark interface — use: `https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600`
- Short description: "BERT, GPT, Transformers, Sentiment AI"
- Project count: 15 Projects

**DOMAIN 6: Computer Vision**
- Neon border color: `#06B6D4` (teal)
- Image: AI eye with glowing detection bounding boxes scanning a face/object — use: `https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=600`
- Short description: "YOLO, OpenCV, MediaPipe, DeepFace"
- Project count: 10 Projects

**DOMAIN 7: Blockchain**
- Neon border color: `#C9A84C` (gold)
- Image: 3D glowing blockchain network with gold chain links floating in dark space — use: `https://images.unsplash.com/photo-1639762681057-408e52192e55?w=600`
- Short description: "Solidity, Ethereum, Web3, Smart Contracts"
- Project count: 15 Projects

**DOMAIN 8: App Development**
- Neon border color: `#818CF8` (indigo)
- Image: Modern premium app UI on a floating 3D smartphone with glowing screen — use: `https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600`
- Short description: "Flutter, Firebase, React Native, AI Apps"
- Project count: 15 Projects

**DOMAIN 9: Web Development**
- Neon border color: `#34D399` (emerald)
- Image: Premium dark web UI on a floating 3D monitor/laptop with glowing code — use: `https://images.unsplash.com/photo-1547658719-da2b51169166?w=600`
- Short description: "React, Node.js, Full Stack, Real-Time Apps"
- Project count: 10 Projects

---

### SECTION 5: ALL 100+ PROJECTS SHOWCASE

**Section Title:** "Our Complete Project Catalog" — 3D text
**Subtitle:** "100+ industry-grade projects across 9 domains — with full mentorship, source code & documentation"

**Filter Bar (sticky at top of section):**
- Filter buttons: [All] [AI] [Machine Learning] [Deep Learning] [Data Science] [NLP] [Computer Vision] [Blockchain] [Web Dev] [App Dev]
- Active filter = gold gradient button; inactive = dark glass button
- Clicking a filter smoothly shows/hides cards using CSS opacity + translateY transition

**Project Cards Grid:** 4 columns desktop / 2 tablet / 1 mobile
- Each card is a **glassmorphism 3D tilt card**
- Card hover lifts with shadow + 3D tilt via JavaScript mousemove

**For each project card, generate a UNIQUE 3D-style thumbnail image using a CSS gradient background** — use the gradient colors provided in the data below, plus overlay a tech-themed SVG pattern or use Unsplash photos via CDN.

---

#### 📂 COMPLETE PROJECT LIST — ALL 100+ PROJECTS:

Build cards for ALL of the following projects. Use the provided info for each card.

---

##### 🤖 ARTIFICIAL INTELLIGENCE (10 Projects)

**[AI-001]** Intelligent Conversational Tutoring Assistant Using LLMs
- Tech: Python · LangChain · OpenAI GPT-4 · FastAPI · React
- Price: ₹5,500 | Delivery: 7-10 Days
- Card gradient: `linear-gradient(135deg, #1a0533, #0d1f3c)`
- Card image: Futuristic AI chatbot interface glowing — `https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400`
- Category tag: AI (purple)

**[AI-002]** AI-Powered Resume Analyzer for Skill Gap Matching
- Tech: Python · spaCy · BERT · Streamlit · NLP
- Price: ₹4,800 | Delivery: 5-7 Days
- Card gradient: `linear-gradient(135deg, #0d1f3c, #0a2a1a)`
- Card image: Resume with NLP parsing glowing highlights — `https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400`
- Category tag: AI (purple)

**[AI-003]** AI-Based Fake News Detection and Verification System
- Tech: Python · BERT · Transformers · Flask · React
- Price: ₹5,000 | Delivery: 5-7 Days
- Card gradient: `linear-gradient(135deg, #1c0a0a, #0d1f3c)`
- Card image: Digital newspaper with AI scanning overlays — `https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400`
- Category tag: AI (purple)

**[AI-004]** Intelligent Traffic Signal Optimization Using AI
- Tech: Python · TensorFlow · OpenCV · Reinforcement Learning · Flask
- Price: ₹6,000 | Delivery: 7-10 Days
- Card gradient: `linear-gradient(135deg, #1a1200, #0d1f1a)`
- Card image: Aerial city traffic with AI overlay bounding boxes — `https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400`
- Category tag: AI (purple)

**[AI-005]** AI-Powered Code Review and Bug Detection Tool
- Tech: Python · OpenAI · LangChain · FastAPI · React
- Price: ₹5,500 | Delivery: 7-10 Days
- Card gradient: `linear-gradient(135deg, #0a1628, #1a0533)`
- Card image: Dark IDE code editor with glowing AI review highlights — `https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400`
- Category tag: AI (purple)

**[AI-006]** Intelligent Crop Disease Prediction and Advisory System
- Tech: Python · TensorFlow · Flask · React · MongoDB
- Price: ₹5,000 | Delivery: 7-10 Days
- Card gradient: `linear-gradient(135deg, #0a2a0a, #1a1200)`
- Card image: Green crop leaf with AI detection circle glowing — `https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400`
- Category tag: AI (purple)

**[AI-007]** AI-Based Customer Churn Prediction Platform
- Tech: Python · scikit-learn · XGBoost · Streamlit · Pandas
- Price: ₹5,200 | Delivery: 5-7 Days
- Card gradient: `linear-gradient(135deg, #1a0a28, #0d1f3c)`
- Card image: Business dashboard with glowing churn prediction charts — `https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400`
- Category tag: AI (purple)

**[AI-008]** AI-Powered Legal Document Drafting Assistant
- Tech: Python · GPT-4 · LangChain · React · FastAPI
- Price: ₹6,500 | Delivery: 7-10 Days
- Card gradient: `linear-gradient(135deg, #1a1400, #0a1628)`
- Card image: Legal scales and glowing AI document interface — `https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400`
- Category tag: AI (purple)

**[AI-009]** Intelligent Question Generation from Educational Content
- Tech: Python · T5 · Transformers · Streamlit · NLTK
- Price: ₹4,500 | Delivery: 5-7 Days
- Card gradient: `linear-gradient(135deg, #0a2a1a, #1a0533)`
- Card image: Open book with glowing AI question generation effects — `https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400`
- Category tag: AI (purple)

**[AI-010]** AI-Driven Personalized Learning Path Recommender
- Tech: Python · OpenAI · Flask · React · MongoDB
- Price: ₹5,800 | Delivery: 7-10 Days
- Card gradient: `linear-gradient(135deg, #0d1f3c, #1a0a28)`
- Card image: Glowing learning roadmap dashboard with AI nodes — `https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400`
- Category tag: AI (purple)

---

##### 🧠 MACHINE LEARNING (10 Projects)

**[ML-001]** Sign Language Gesture Classification Framework
- Tech: Python · MediaPipe · scikit-learn · OpenCV · Streamlit
- Price: ₹4,500 | Delivery: 5-7 Days
- Card gradient: `linear-gradient(135deg, #001a2c, #1a0a28)`
- Card image: Hand gesture recognition with glowing landmark dots — `https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=400`
- Category tag: ML (cyan)

**[ML-002]** Predictive Maintenance System for Industrial Equipment
- Tech: Python · scikit-learn · XGBoost · Flask · Pandas
- Price: ₹5,500 | Delivery: 5-7 Days
- Card gradient: `linear-gradient(135deg, #1a0a0a, #001a2c)`
- Card image: Industrial machinery with predictive AI sensor overlay — `https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400`
- Category tag: ML (cyan)

**[ML-003]** Stock Market Price Prediction Using Ensemble Learning
- Tech: Python · LSTM · scikit-learn · Pandas · Streamlit · Plotly
- Price: ₹5,000 | Delivery: 5-7 Days
- Card gradient: `linear-gradient(135deg, #0a1a0a, #001a2c)`
- Card image: Stock candlestick chart with glowing ML prediction line — `https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400`
- Category tag: ML (cyan)

**[ML-004]** Credit Card Fraud Detection System
- Tech: Python · scikit-learn · XGBoost · Flask · Imbalanced-learn
- Price: ₹5,000 | Delivery: 5-7 Days
- Card gradient: `linear-gradient(135deg, #1a0a0a, #0a1628)`
- Card image: Credit card with glowing red fraud alert detection overlay — `https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400`
- Category tag: ML (cyan)

**[ML-005]** Customer Segmentation Using Clustering Algorithms
- Tech: Python · scikit-learn · KMeans · Pandas · Streamlit · Plotly
- Price: ₹4,500 | Delivery: 5-7 Days
- Card gradient: `linear-gradient(135deg, #0a1628, #1a0a28)`
- Card image: Colorful 3D cluster scatter plot visualization — `https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400`
- Category tag: ML (cyan)

**[ML-006]** House Price Prediction Using Advanced Regression Models
- Tech: Python · scikit-learn · XGBoost · Pandas · Streamlit · Flask
- Price: ₹4,800 | Delivery: 5-7 Days
- Card gradient: `linear-gradient(135deg, #1a0a28, #0a1a0a)`
- Card image: Modern house with glowing price prediction data overlay — `https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400`
- Category tag: ML (cyan)

**[ML-007]** Disease Risk Prediction Using Patient Medical Records
- Tech: Python · scikit-learn · Random Forest · Flask · Pandas
- Price: ₹5,000 | Delivery: 5-7 Days
- Card gradient: `linear-gradient(135deg, #001a2c, #0a1a0a)`
- Card image: Medical scan with glowing AI health risk prediction UI — `https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400`
- Category tag: ML (cyan)

**[ML-008]** E-Commerce Product Recommendation Engine
- Tech: Python · scikit-learn · Collaborative Filtering · Flask · MongoDB
- Price: ₹5,500 | Delivery: 7-10 Days
- Card gradient: `linear-gradient(135deg, #1a1400, #001a2c)`
- Card image: E-commerce product grid with glowing AI recommendation highlights — `https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400`
- Category tag: ML (cyan)

**[ML-009]** Spam Email Detection Using ML Classifiers
- Tech: Python · scikit-learn · NLTK · Pandas · Flask · Streamlit
- Price: ₹4,200 | Delivery: 5-7 Days
- Card gradient: `linear-gradient(135deg, #0a1628, #1a0a0a)`
- Card image: Email inbox with glowing red spam detection scanner — `https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400`
- Category tag: ML (cyan)

**[ML-010]** Road Traffic Accident Severity Prediction System
- Tech: Python · scikit-learn · XGBoost · Pandas · Streamlit · Flask
- Price: ₹5,000 | Delivery: 5-7 Days
- Card gradient: `linear-gradient(135deg, #001a2c, #1a0a0a)`
- Card image: Aerial road with glowing accident severity heatmap overlay — `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400`
- Category tag: ML (cyan)

---

##### 🔬 DEEP LEARNING (10 Projects)

**[DL-001]** Real-Time Facial Emotion Detection System
- Tech: Python · TensorFlow · Keras · OpenCV · Flask · CNN
- Price: ₹5,200 | Delivery: 7-10 Days
- Card gradient: `linear-gradient(135deg, #1a0a1a, #001a2c)`
- Card image: Face with glowing emotion detection AI bounding boxes — `https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400`
- Category tag: DL (orange)

**[DL-002]** Medical Image Segmentation Using U-Net Architecture
- Tech: Python · TensorFlow · Keras · OpenCV · Flask · NumPy
- Price: ₹6,000 | Delivery: 7-10 Days
- Card gradient: `linear-gradient(135deg, #001a2c, #1a0a0a)`
- Card image: MRI brain scan with glowing segmentation overlay — `https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400`
- Category tag: DL (orange)

**[DL-003]** Speech Emotion Recognition Using CNN-LSTM
- Tech: Python · TensorFlow · Keras · LibROSA · Streamlit
- Price: ₹5,500 | Delivery: 7-10 Days
- Card gradient: `linear-gradient(135deg, #1a0a28, #001a2c)`
- Card image: Sound waveform with emotion classification overlays glowing — `https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400`
- Category tag: DL (orange)

**[DL-004]** Brain Tumor Detection Using Convolutional Neural Networks
- Tech: Python · TensorFlow · Keras · OpenCV · Flask · ResNet
- Price: ₹5,800 | Delivery: 7-10 Days
- Card gradient: `linear-gradient(135deg, #1a0028, #001a0a)`
- Card image: Brain MRI with highlighted tumor detection glow — `https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400`
- Category tag: DL (orange)

**[DL-005]** Deepfake Video Detection System Using Deep Learning
- Tech: Python · TensorFlow · PyTorch · OpenCV · Flask
- Price: ₹6,500 | Delivery: 10-12 Days
- Card gradient: `linear-gradient(135deg, #1a0a0a, #0a001a)`
- Card image: Split face showing real vs deepfake AI detection — `https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?w=400`
- Category tag: DL (orange)

**[DL-006]** Autonomous Vehicle Lane Detection System
- Tech: Python · TensorFlow · OpenCV · Semantic Segmentation · Flask
- Price: ₹6,000 | Delivery: 10-12 Days
- Card gradient: `linear-gradient(135deg, #001a0a, #001a2c)`
- Card image: Dashboard camera view of road with glowing lane detection lines — `https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400`
- Category tag: DL (orange)

**[DL-007]** Video-Based Human Action Recognition System
- Tech: Python · PyTorch · TensorFlow · OpenCV · Flask
- Price: ₹6,000 | Delivery: 10-12 Days
- Card gradient: `linear-gradient(135deg, #0a001a, #001a2c)`
- Card image: Person in motion with glowing skeleton tracking overlay — `https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400`
- Category tag: DL (orange)

**[DL-008]** Skin Lesion Classification Using Transfer Learning
- Tech: Python · TensorFlow · Keras · ResNet50 · Flask · NumPy
- Price: ₹5,500 | Delivery: 7-10 Days
- Card gradient: `linear-gradient(135deg, #001a2c, #1a0a1a)`
- Card image: Dermoscopy skin image with AI classification heatmap — `https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400`
- Category tag: DL (orange)

**[DL-009]** Neural Style Transfer Application
- Tech: Python · TensorFlow · PyTorch · VGG19 · Flask · React
- Price: ₹5,000 | Delivery: 5-7 Days
- Card gradient: `linear-gradient(135deg, #1a0a28, #1a0a0a)`
- Card image: Painting style art applied to a photo — vibrant colors — `https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400`
- Category tag: DL (orange)

**[DL-010]** Handwritten Text Recognition Using Deep Learning
- Tech: Python · TensorFlow · Keras · OpenCV · Streamlit · CRNN
- Price: ₹5,200 | Delivery: 7-10 Days
- Card gradient: `linear-gradient(135deg, #001a2c, #0a001a)`
- Card image: Handwritten text with glowing OCR text extraction overlay — `https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400`
- Category tag: DL (orange)

---

##### 📊 DATA SCIENCE (10 Projects)

**[DS-001]** Predictive Analytics for Patient Health Outcomes
- Tech: Python · Pandas · XGBoost · Plotly · Streamlit
- Price: ₹5,000 | Delivery: 5-7 Days
- Card gradient: `linear-gradient(135deg, #001a0a, #001a2c)`
- Card image: Medical data dashboard with glowing prediction charts — `https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400`
- Category tag: DS (green)

**[DS-002]** COVID-19 Data Analysis and Forecasting Dashboard
- Tech: Python · Pandas · Prophet · Plotly · Streamlit · Matplotlib
- Price: ₹4,500 | Delivery: 5-7 Days
- Card gradient: `linear-gradient(135deg, #001a2c, #0a1a0a)`
- Card image: World map with glowing COVID data overlays and charts — `https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=400`
- Category tag: DS (green)

**[DS-003]** Social Media Analytics Platform for Trend Detection
- Tech: Python · Pandas · Tweepy · NLTK · Plotly · Streamlit
- Price: ₹5,000 | Delivery: 5-7 Days
- Card gradient: `linear-gradient(135deg, #1a001a, #001a2c)`
- Card image: Social media analytics dashboard with viral trend charts — `https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400`
- Category tag: DS (green)

**[DS-004]** Retail Sales Forecasting and Inventory Optimization
- Tech: Python · Pandas · scikit-learn · Prophet · Plotly · Flask
- Price: ₹5,500 | Delivery: 5-7 Days
- Card gradient: `linear-gradient(135deg, #1a1400, #001a0a)`
- Card image: Retail store inventory with glowing forecasting dashboard — `https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400`
- Category tag: DS (green)

**[DS-005]** Financial Risk Analytics and Portfolio Dashboard
- Tech: Python · Pandas · NumPy · Plotly · Dash · scikit-learn
- Price: ₹5,500 | Delivery: 5-7 Days
- Card gradient: `linear-gradient(135deg, #001a2c, #1a1400)`
- Card image: Financial trading dashboard with glowing risk analytics — `https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400`
- Category tag: DS (green)

**[DS-006]** Climate Change Data Visualization Platform
- Tech: Python · Pandas · Plotly · Matplotlib · Streamlit · NumPy
- Price: ₹4,800 | Delivery: 5-7 Days
- Card gradient: `linear-gradient(135deg, #001a2c, #001a0a)`
- Card image: Earth from space with glowing climate data overlays — `https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400`
- Category tag: DS (green)

**[DS-007]** Sports Performance Analytics System
- Tech: Python · Pandas · NumPy · Plotly · scikit-learn · Streamlit
- Price: ₹5,000 | Delivery: 5-7 Days
- Card gradient: `linear-gradient(135deg, #0a1a0a, #001a2c)`
- Card image: Cricket/football player stats glowing analytics dashboard — `https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400`
- Category tag: DS (green)

**[DS-008]** Real Estate Market Analysis and Price Dashboard
- Tech: Python · Pandas · Plotly · scikit-learn · Flask · Folium
- Price: ₹5,200 | Delivery: 5-7 Days
- Card gradient: `linear-gradient(135deg, #1a001a, #001a0a)`
- Card image: Real estate map with glowing price heatmap overlay — `https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400`
- Category tag: DS (green)

**[DS-009]** HR Analytics and Employee Attrition Prediction
- Tech: Python · Pandas · scikit-learn · XGBoost · Plotly · Streamlit
- Price: ₹5,000 | Delivery: 5-7 Days
- Card gradient: `linear-gradient(135deg, #1a0a28, #001a0a)`
- Card image: HR dashboard with employee attrition metrics glowing — `https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400`
- Category tag: DS (green)

**[DS-010]** E-Commerce Customer Behavior Analytics Dashboard
- Tech: Python · Pandas · NumPy · Plotly · scikit-learn · Streamlit
- Price: ₹5,500 | Delivery: 5-7 Days
- Card gradient: `linear-gradient(135deg, #1a1400, #1a0a28)`
- Card image: E-commerce analytics dashboard with funnel and cohort charts — `https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400`
- Category tag: DS (green)

---

##### 👁️ COMPUTER VISION (10 Projects)

**[CV-001]** Computer Vision Safety Compliance Monitoring System
- Tech: YOLOv8 · PyTorch · OpenCV · FastAPI · React
- Price: ₹6,000 | Delivery: 10-12 Days
- Card gradient: `linear-gradient(135deg, #001a2c, #1a0a1a)`
- Card image: Industrial worker with PPE detection bounding boxes glowing — `https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400`
- Category tag: CV (teal)

**[CV-002]** Automated Product Defect Detection in Manufacturing
- Tech: Python · TensorFlow · YOLOv8 · OpenCV · Flask · Pandas
- Price: ₹6,500 | Delivery: 10-12 Days
- Card gradient: `linear-gradient(135deg, #1a0a0a, #001a2c)`
- Card image: Factory assembly line with defect detection glowing circles — `https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=400`
- Category tag: CV (teal)

**[CV-003]** Real-Time Hand Gesture Recognition System
- Tech: Python · MediaPipe · TensorFlow · OpenCV · Flask
- Price: ₹5,000 | Delivery: 5-7 Days
- Card gradient: `linear-gradient(135deg, #001a2c, #0a1a0a)`
- Card image: Hand with glowing MediaPipe landmark tracking points — `https://images.unsplash.com/photo-1590736704728-f4730bb30770?w=400`
- Category tag: CV (teal)

**[CV-004]** Document Scanner and OCR Text Extraction System
- Tech: Python · OpenCV · Tesseract · Flask · React
- Price: ₹4,800 | Delivery: 5-7 Days
- Card gradient: `linear-gradient(135deg, #0a1a0a, #001a2c)`
- Card image: Document scan with glowing OCR text extraction effect — `https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400`
- Category tag: CV (teal)

**[CV-005]** Wildlife Species Identification Using Computer Vision
- Tech: Python · TensorFlow · YOLOv8 · OpenCV · Flask · Streamlit
- Price: ₹5,500 | Delivery: 7-10 Days
- Card gradient: `linear-gradient(135deg, #001a0a, #001a2c)`
- Card image: Wild animal with glowing AI species detection bounding box — `https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=400`
- Category tag: CV (teal)

**[CV-006]** Virtual Try-On System Using Augmented Reality
- Tech: Python · OpenCV · MediaPipe · Flask · React
- Price: ₹6,500 | Delivery: 10-12 Days
- Card gradient: `linear-gradient(135deg, #1a0a1a, #001a2c)`
- Card image: Person virtually trying on clothing with AR overlay — `https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400`
- Category tag: CV (teal)

**[CV-007]** Road Sign Detection and Classification System
- Tech: Python · YOLOv5 · TensorFlow · OpenCV · Flask
- Price: ₹5,500 | Delivery: 7-10 Days
- Card gradient: `linear-gradient(135deg, #001a2c, #1a0a0a)`
- Card image: Road with glowing sign detection bounding boxes — `https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400`
- Category tag: CV (teal)

**[CV-008]** Medical X-Ray Anomaly Detection System
- Tech: Python · TensorFlow · Keras · OpenCV · Flask · NumPy
- Price: ₹6,000 | Delivery: 7-10 Days
- Card gradient: `linear-gradient(135deg, #001a2c, #0a001a)`
- Card image: Chest X-ray with glowing anomaly detection heatmap — `https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400`
- Category tag: CV (teal)

**[CV-009]** Smart Parking System Using Computer Vision
- Tech: Python · YOLOv8 · OpenCV · Flask · React · MongoDB
- Price: ₹5,500 | Delivery: 7-10 Days
- Card gradient: `linear-gradient(135deg, #0a1a0a, #001a2c)`
- Card image: Aerial parking lot with green/red availability overlays glowing — `https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=400`
- Category tag: CV (teal)

**[CV-010]** Face Recognition Attendance Management System
- Tech: Python · OpenCV · DeepFace · Flask · React · MongoDB
- Price: ₹5,200 | Delivery: 7-10 Days
- Card gradient: `linear-gradient(135deg, #1a0a1a, #0a1a0a)`
- Card image: Face scanning with glowing recognition mesh overlay — `https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=400`
- Category tag: CV (teal)

---

##### 💬 NLP (15 Projects)

**[NLP-001]** Transformer-Based News Summarization System
- Tech: Python · Hugging Face · BART/T5 · PyTorch · SpaCy
- Price: ₹5,000 | Delivery: 5-7 Days
- Card gradient: `linear-gradient(135deg, #1a001a, #001a2c)` | Category: NLP (pink)

**[NLP-002]** Social Media Sentiment Analysis Framework
- Tech: Python · Pandas · NLTK · SpaCy · TextBlob
- Price: ₹4,500 | Delivery: 5-7 Days
- Card gradient: `linear-gradient(135deg, #001a2c, #1a001a)` | Category: NLP (pink)

**[NLP-003]** Context-Aware Question Answering Chatbot Using Transformers
- Tech: Python · Hugging Face · TensorFlow · FAISS · LangChain
- Price: ₹5,500 | Delivery: 7-10 Days
- Card gradient: `linear-gradient(135deg, #0a001a, #001a0a)` | Category: NLP (pink)

**[NLP-004]** Neural Machine Translation Framework for Multilingual Text
- Tech: Python · Hugging Face · MarianMT · T5 · TensorFlow
- Price: ₹5,000 | Delivery: 5-7 Days
- Card gradient: `linear-gradient(135deg, #1a001a, #0a1a0a)` | Category: NLP (pink)

**[NLP-005]** Intelligent Resume Parsing and Skill Extraction System
- Tech: Python · SpaCy · NLTK · Pandas · scikit-learn · PDFMiner
- Price: ₹4,800 | Delivery: 5-7 Days
- Card gradient: `linear-gradient(135deg, #001a2c, #0a001a)` | Category: NLP (pink)

**[NLP-006]** Semantic Document Clustering and Intelligent Search System
- Tech: Python · Scikit-learn · SpaCy · Sentence Transformers · K-Means
- Price: ₹5,000 | Delivery: 5-7 Days
- Card gradient: `linear-gradient(135deg, #0a1a0a, #1a001a)` | Category: NLP (pink)

**[NLP-007]** Neural Speech-to-Text Conversion System
- Tech: Python · TensorFlow · DeepSpeech · wav2vec 2.0 · LibROSA
- Price: ₹5,500 | Delivery: 7-10 Days
- Card gradient: `linear-gradient(135deg, #001a0a, #001a2c)` | Category: NLP (pink)

**[NLP-008]** Context-Aware Text-to-Emoji Mapping System
- Tech: Python · NLTK · SpaCy · TextBlob · VADER · Transformers
- Price: ₹4,500 | Delivery: 5-7 Days
- Card gradient: `linear-gradient(135deg, #1a1400, #0a001a)` | Category: NLP (pink)

**[NLP-009]** Legal Document Analysis System Using NLP
- Tech: Python · SpaCy · Legal-BERT · NLTK · Hugging Face · Streamlit
- Price: ₹6,000 | Delivery: 7-10 Days
- Card gradient: `linear-gradient(135deg, #1a001a, #1a1400)` | Category: NLP (pink)

**[NLP-010]** Medical Question Answering System Using Domain-Specific LLMs
- Tech: Python · Hugging Face Transformers · LangChain · FAISS · Elasticsearch
- Price: ₹5,500 | Delivery: 7-10 Days
- Card gradient: `linear-gradient(135deg, #001a2c, #1a001a)` | Category: NLP (pink)

**[NLP-011]** ⭐ AI-Driven Interview Simulation and Feedback System [PREMIUM]
- Tech: Python · OpenAI GPT-4 · Hugging Face · NLTK · SpaCy · Streamlit
- Price: ₹7,500 | Delivery: 10-12 Days
- Card gradient: `linear-gradient(135deg, #1a1400, #1a001a)` | Add gold "PREMIUM" badge

**[NLP-012]** ⭐ Context-Aware Legal Text Condensation Engine [PREMIUM]
- Tech: Python · SpaCy · Legal-BERT · Hugging Face · Pandas · Streamlit
- Price: ₹8,000 | Delivery: 10-12 Days
- Card gradient: `linear-gradient(135deg, #1a0a28, #1a001a)` | Add gold "PREMIUM" badge

**[NLP-013]** ⭐ Emotionally Adaptive Conversational Therapy Assistant [PREMIUM]
- Tech: Python · OpenAI GPT-4 · DialoGPT · Hugging Face · NLTK · PyTorch
- Price: ₹8,500 | Delivery: 10-12 Days
- Card gradient: `linear-gradient(135deg, #0a1a0a, #1a001a)` | Add gold "PREMIUM" badge

**[NLP-014]** ⭐ Multi-Turn Document Question Answering Framework [PREMIUM]
- Tech: Python · Hugging Face · BERT · T5 · LangChain · FAISS · Streamlit
- Price: ₹7,500 | Delivery: 10-12 Days
- Card gradient: `linear-gradient(135deg, #001a2c, #0a001a)` | Add gold "PREMIUM" badge

**[NLP-015]** ⭐ Context-Driven Argumentation Engine for AI-Generated Debates [PREMIUM]
- Tech: Python · OpenAI GPT-4 · Hugging Face · LangChain · SpaCy · Streamlit
- Price: ₹9,000 | Delivery: 10-12 Days
- Card gradient: `linear-gradient(135deg, #1a1400, #001a2c)` | Add gold "PREMIUM" badge

---

##### ⛓️ BLOCKCHAIN (15 Projects)

**[BC-001]** Blockchain-Enabled Decentralized Voting Framework
- Tech: Solidity · Ethereum · Web3.js · React · MetaMask · IPFS · Ganache
- Price: ₹6,000 | Delivery: 10-12 Days
- Card gradient: `linear-gradient(135deg, #1a1400, #0a1628)` | Category: Blockchain (gold)

**[BC-002]** Blockchain-Based Healthcare Data Management System
- Tech: Ethereum · Solidity · IPFS · Web3.js · MetaMask · Truffle · MongoDB
- Price: ₹6,500 | Delivery: 10-14 Days
- Card gradient: `linear-gradient(135deg, #001a2c, #1a1400)` | Category: Blockchain (gold)

**[BC-003]** Blockchain-Powered Ancestral Lineage Registry
- Tech: Ethereum · Solidity · IPFS · uPort · React · MetaMask · JWT
- Price: ₹6,500 | Delivery: 10-14 Days
- Card gradient: `linear-gradient(135deg, #0a1a0a, #1a1400)` | Category: Blockchain (gold)

**[BC-004]** Blockchain-Based Academic Certificate Verification System
- Tech: Ethereum · Solidity · IPFS · MetaMask · Truffle · Node.js · SHA-256
- Price: ₹6,000 | Delivery: 10-14 Days
- Card gradient: `linear-gradient(135deg, #1a0a1a, #1a1400)` | Category: Blockchain (gold)

**[BC-005]** Smart Contract-Based Digital Will Execution System
- Tech: Solidity · Ethereum · Web3.js · React · MetaMask · Truffle · IPFS
- Price: ₹6,500 | Delivery: 10-14 Days
- Card gradient: `linear-gradient(135deg, #0a1628, #1a1400)` | Category: Blockchain (gold)

**[BC-006]** Blockchain Certificate Issuance for E-Learning Platforms
- Tech: Ethereum · Solidity · IPFS · Web3.js · MetaMask · Truffle · SHA-256
- Price: ₹5,500 | Delivery: 7-10 Days
- Card gradient: `linear-gradient(135deg, #1a1400, #0a1a0a)` | Category: Blockchain (gold)

**[BC-007]** Decentralized Job Board on Blockchain
- Tech: Ethereum · Solidity · Web3.js · React · MetaMask · Truffle · IPFS
- Price: ₹5,500 | Delivery: 7-10 Days
- Card gradient: `linear-gradient(135deg, #001a2c, #1a1400)` | Category: Blockchain (gold)

**[BC-008]** Decentralized Micro-Donation Contract System
- Tech: Ethereum · Solidity · Web3.js · React · MetaMask · Ethers.js
- Price: ₹5,000 | Delivery: 7-10 Days
- Card gradient: `linear-gradient(135deg, #1a0a0a, #1a1400)` | Category: Blockchain (gold)

**[BC-009]** Minimalistic Ether Vault Smart Contract
- Tech: Solidity · Ethereum · MetaMask · Truffle or Hardhat · Etherscan
- Price: ₹4,500 | Delivery: 5-7 Days
- Card gradient: `linear-gradient(135deg, #0a1a0a, #1a1400)` | Category: Blockchain (gold)

**[BC-010]** Decentralized Idea Submission and Public Ledger System
- Tech: Solidity · Ethereum · Web3.js · React · MetaMask · Truffle · Ganache
- Price: ₹5,000 | Delivery: 5-7 Days
- Card gradient: `linear-gradient(135deg, #1a1400, #001a2c)` | Category: Blockchain (gold)

**[BC-011]** ⭐ Tamper-Proof Land Ownership Management Using Blockchain [PREMIUM]
- Tech: Solidity · Ethereum · Web3.js · React · MetaMask · IPFS · MongoDB
- Price: ₹9,000 | Delivery: 12-15 Days | Add gold "PREMIUM" badge

**[BC-012]** ⭐ AI-Driven Generative Art Engine with NFT Creation [PREMIUM]
- Tech: Python · TensorFlow · GANs · React · Solidity · Ethereum · Web3.js
- Price: ₹10,000 | Delivery: 14-18 Days | Add gold "PREMIUM" badge

**[BC-013]** ⭐ Decentralized Book Ownership and Transfer Ledger [PREMIUM]
- Tech: Solidity · Ethereum · Web3.js · React · MetaMask · IPFS · MongoDB
- Price: ₹8,500 | Delivery: 12-15 Days | Add gold "PREMIUM" badge

**[BC-014]** ⭐ Blockchain-Based Culinary Content Sharing Platform [PREMIUM]
- Tech: Solidity · Ethereum · MetaMask · Web3.js · Next.js · Truffle · Node.js
- Price: ₹8,000 | Delivery: 12-14 Days | Add gold "PREMIUM" badge

**[BC-015]** ⭐ Trustless Warranty Registration and Claim System [PREMIUM]
- Tech: Solidity · Ethereum · Web3.js · React · MetaMask · Truffle · IPFS
- Price: ₹8,500 | Delivery: 10-14 Days | Add gold "PREMIUM" badge

---

##### 🌐 WEB DEVELOPMENT (10 Projects)

**[WEB-001]** Full-Stack E-Commerce Platform with Secure Payment Integration
- Tech: React · Redux · Node.js · Express.js · MongoDB · JWT · Stripe API
- Price: ₹5,500 | Delivery: 10-14 Days
- Card image: `https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400`
- Category tag: Web Dev (emerald)

**[WEB-002]** Full-Stack Job Portal with Role-Based Access and Admin Tools
- Tech: Angular · Node.js · Express.js · MySQL/PostgreSQL · Bootstrap · JWT
- Price: ₹5,000 | Delivery: 10-14 Days
- Card image: `https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400`
- Category tag: Web Dev (emerald)

**[WEB-003]** Web-Based Car Rental Booking Platform with Dynamic Pricing
- Tech: React · Node.js · Express.js · MySQL · Bootstrap · JWT · REST APIs
- Price: ₹5,000 | Delivery: 10-14 Days
- Card image: `https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400`
- Category tag: Web Dev (emerald)

**[WEB-004]** Full-Stack Music Streaming Platform with Playlist Management
- Tech: React · HTML5 Audio API · Node.js · Express.js · MongoDB · Firebase
- Price: ₹5,500 | Delivery: 10-14 Days
- Card image: `https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400`
- Category tag: Web Dev (emerald)

**[WEB-005]** Web-Based Hospital Management System with Patient Records
- Tech: PHP (Laravel) · MySQL · Blade Templates · Bootstrap · jQuery · HTML5
- Price: ₹5,500 | Delivery: 10-14 Days
- Card image: `https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400`
- Category tag: Web Dev (emerald)

**[WEB-006]** Real-Time Online Auction System with Dynamic Bidding
- Tech: Node.js · Express.js · Socket.io · React · PostgreSQL · JavaScript
- Price: ₹5,500 | Delivery: 10-14 Days
- Card image: `https://images.unsplash.com/photo-1605792657660-596af9009e82?w=400`
- Category tag: Web Dev (emerald)

**[WEB-007]** Visually Adaptive Digital Art Gallery with E-Commerce
- Tech: Next.js · React · GraphQL · Tailwind CSS · Headless CMS
- Price: ₹5,000 | Delivery: 7-10 Days
- Card image: `https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400`
- Category tag: Web Dev (emerald)

**[WEB-008]** Interactive Real Estate Listing Platform with Geolocation
- Tech: Node.js · Express.js · React · PostgreSQL · Tailwind CSS · Google Maps API
- Price: ₹5,500 | Delivery: 10-14 Days
- Card image: `https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400`
- Category tag: Web Dev (emerald)

**[WEB-009]** Web-Based Personal Budget Planner with Chart Visualizations
- Tech: React · Node.js · Express.js · MongoDB · Chart.js · Bootstrap
- Price: ₹4,500 | Delivery: 7-10 Days
- Card image: `https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400`
- Category tag: Web Dev (emerald)

**[WEB-010]** Event Management and Registration System with RSVP
- Tech: React · Node.js · Express.js · MongoDB · Bootstrap · JWT · Nodemailer
- Price: ₹5,000 | Delivery: 10-14 Days
- Card image: `https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400`
- Category tag: Web Dev (emerald)

---

##### 📱 APP DEVELOPMENT (15 Projects)

**[APP-001]** Campus Event Navigator and Student Community App
- Tech: Flutter · Dart · Firebase · Firestore · Cloud Messaging
- Price: ₹4,500 | Delivery: 7-10 Days
- Card image: `https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400`
- Category tag: App Dev (indigo)

**[APP-002]** Personal Finance Tracker with Budget Analytics
- Tech: Flutter · Dart · Firebase Firestore · Charts Flutter · Local Notifications
- Price: ₹4,800 | Delivery: 7-10 Days
- Card image: `https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400`
- Category tag: App Dev (indigo)

**[APP-003]** Real-Time Study Group Collaboration App
- Tech: Flutter · Dart · Firebase Authentication · Firestore · Cloud Messaging
- Price: ₹5,000 | Delivery: 7-10 Days
- Card image: `https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400`
- Category tag: App Dev (indigo)

**[APP-004]** Fitness and Workout Tracker with AI Coaching
- Tech: Flutter · Dart · Firebase · TensorFlow Lite · Health APIs
- Price: ₹5,500 | Delivery: 10-12 Days
- Card image: `https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400`
- Category tag: App Dev (indigo)

**[APP-005]** On-Demand Home Service Booking Application
- Tech: Flutter · Dart · Firebase · Firestore · Stripe · Google Maps
- Price: ₹5,500 | Delivery: 10-14 Days
- Card image: `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400`
- Category tag: App Dev (indigo)

**[APP-006]** Intelligent Invoice Digitization Application with OCR
- Tech: Flutter · Dart · Tesseract OCR · Firebase Authentication · Firestore
- Price: ₹5,000 | Delivery: 7-10 Days
- Card image: `https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=400`
- Category tag: App Dev (indigo)

**[APP-007]** Behavioral Consistency Tracker with Motivational Design
- Tech: Flutter · React Native · Firebase · Lottie Animations · Cloud Messaging
- Price: ₹4,800 | Delivery: 7-10 Days
- Card image: `https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400`
- Category tag: App Dev (indigo)

**[APP-008]** AI-Powered Symptom Analysis and First-Aid Guidance App
- Tech: Flutter · Dart · OpenAI API · Firebase Firestore · Firebase Cloud Functions
- Price: ₹5,500 | Delivery: 7-10 Days
- Card image: `https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400`
- Category tag: App Dev (indigo)

**[APP-009]** Visual Semantics Interpretation System for Contextual Images
- Tech: Flutter · Dart · Python Flask · Hugging Face Vision · OpenAI Vision API
- Price: ₹6,000 | Delivery: 7-10 Days
- Card image: `https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=400`
- Category tag: App Dev (indigo)

**[APP-010]** Geo-Intelligent Civic Infrastructure Feedback Application
- Tech: Flutter · Dart · Firebase · Firestore · Google APIs · Node.js
- Price: ₹5,500 | Delivery: 7-10 Days
- Card image: `https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400`
- Category tag: App Dev (indigo)

**[APP-011]** ⭐ AgriConnect: Farm-to-Market Digital Exchange Platform [PREMIUM]
- Tech: Flutter · Dart · Firebase · Firestore · Google Maps API · Cloud Messaging
- Price: ₹8,500 | Delivery: 12-15 Days | Add gold "PREMIUM" badge

**[APP-012]** ⭐ Comprehensive Travel and Tourism Experience Platform [PREMIUM]
- Tech: Flutter · Dart · Firebase · Razorpay/Stripe API · Google Maps API
- Price: ₹9,000 | Delivery: 12-15 Days | Add gold "PREMIUM" badge

**[APP-013]** ⭐ Intelligent Plant Disease Diagnosis and Monitoring Platform [PREMIUM]
- Tech: Flutter · Firebase · Firestore · Firebase Cloud Functions · TensorFlow Lite
- Price: ₹8,000 | Delivery: 12-14 Days | Add gold "PREMIUM" badge

**[APP-014]** ⭐ ClassConnect: Interactive Classroom Collaboration Framework [PREMIUM]
- Tech: Flutter · Dart · Firebase · Firestore · Cloud Messaging · OpenAI Vision API
- Price: ₹8,500 | Delivery: 12-15 Days | Add gold "PREMIUM" badge

**[APP-015]** ⭐ Multimodal Content Understanding Framework with AI Insights [PREMIUM]
- Tech: Flutter · Dart · Firebase · Google Vision API · Hugging Face · OpenAI API
- Price: ₹9,500 | Delivery: 14-18 Days | Add gold "PREMIUM" badge

---

### PROJECT CARD DESIGN RULES:
- All cards: glassmorphism dark card `background: rgba(10, 14, 23, 0.85); backdrop-filter: blur(12px);`
- Card border: `1px solid rgba(255,255,255,0.06)` default → neon color on hover
- Top 45% of card: project image (use Unsplash URL) or CSS gradient with tech pattern overlay
- On image: domain badge (top-left corner pill), PREMIUM badge (top-right, gold) if premium
- Bottom 55%: Project ID code, title (Outfit 600, 15px, white), tech stack (small gray pills), price in gold, delivery time, "Enquire Now →" button
- 3D tilt: JavaScript `mousemove` updates `transform: perspective(800px) rotateX(${y}deg) rotateY(${x}deg)`
- On hover: card lifts `translateZ(15px) scale(1.02)`, neon shadow glows

---

### SECTION 6: SERVICES (3D FLIP CARDS)

**Section Title:** "What We Offer" — 3D text
**Layout:** 3 columns × 2 rows = 6 cards

Each card = **CSS 3D flip card** (front face → rotates 180° on hover → shows back face)

**Front face:** Large icon (3D style SVG or emoji in large size), Service name, one-line teaser
**Back face:** Full description, bullet list of what's included, "Learn More →" button

**6 Services:**
1. **🎓 Project Mentorship** — End-to-end from idea to deployment. Includes: ✓ Domain selection help ✓ Architecture design ✓ Coding mentorship ✓ Testing & debugging
2. **📄 IEEE Research Paper** — We write, format & submit. Includes: ✓ Literature review ✓ Methodology chapter ✓ IEEE/Scopus formatting ✓ Submission guidance
3. **📋 Full Documentation** — 12-chapter SRS report + PPT. Includes: ✓ System design ✓ ER diagrams ✓ Use case diagrams ✓ 80+ pages report
4. **💻 Source Code Delivery** — Clean, commented, working code. Includes: ✓ Full source code ✓ Setup guide ✓ .env config ✓ Video walkthrough
5. **🎤 Viva Preparation** — Ace your final exam. Includes: ✓ 50 likely viva questions ✓ Mock Q&A session ✓ PPT coaching ✓ Demo practice
6. **🚀 Career Support** — Land your dream job. Includes: ✓ Resume review ✓ LinkedIn profile ✓ GitHub portfolio setup ✓ Placement project tips

---

### SECTION 7: IEEE / RESEARCH PAPER

**Full-width dark gradient section:** `background: linear-gradient(135deg, #0a0014, #050810, #001428)`
**Left (50%):** 
- Heading: "100% Original Work — Research Paper Included" (gold 3D text)
- Feature checklist with animated appearing checkmarks (stagger reveal):
  ✅ Plagiarism-free guarantee  
  ✅ IEEE & Scopus journal support  
  ✅ Springer publication assistance  
  ✅ Full paper formatting + submission help  
  ✅ Research methodology guidance  
  ✅ Anti-plagiarism Turnitin report provided  
- CTA: "Get Research Paper Support →" (gold gradient button)
- Two glowing badges side by side: [📘 IEEE Certified] [🔬 Scopus Indexed]

**Right (50%):** Floating 3D document animation:
- CSS-animated paper/document floating with slight rotation
- Glowing gold border around it
- "Abstract · Introduction · Methodology · Results · Conclusion" text on it fading in

---

### SECTION 8: WHY CHOOSE US + ANIMATED STATS

**Top: 4 Animated Counter Cards** (count up on scroll)
- 🏆 `500+` Students Helped
- ⚡ `100+` Projects Delivered
- 📚 `9+` Domains
- ⭐ `4.9/5` Rating

**Below: 6 Reason Cards** in 2×3 grid — glassmorphism, icon + heading + text
1. 🧑‍💻 Expert Mentors — IIT/NIT alumni & industry professionals
2. 🔒 100% Original — Zero copied projects, full plagiarism reports
3. ⚡ Fast Delivery — Projects ready in 7-15 days
4. 📞 24/7 Support — WhatsApp & call support always available
5. 💰 Affordable Price — Best price guaranteed in India
6. 🎓 Placement-Ready — Projects that make interviewers say WOW

---

### SECTION 9: TESTIMONIALS (3D CAROUSEL)

**Auto-rotating 3D card carousel** — 4 testimonial cards arranged on a 3D plane that rotates

**4 Testimonials:**
1. **Arjun Sharma** — B.Tech CSE, Hyderabad | ⭐⭐⭐⭐⭐ | "XEN-O1 helped me build an AI project that got me placed at TCS! The IEEE paper they helped write got published too. Best decision of my final year!"
2. **Priya Reddy** — M.Tech AI, Bangalore | ⭐⭐⭐⭐⭐ | "Best mentorship I ever received. The documentation was perfect and their viva preparation was a complete lifesaver. Highly recommend!"
3. **Ravi Kumar** — B.E. ECE, Chennai | ⭐⭐⭐⭐⭐ | "Got my blockchain project in 10 days with full source code and a research paper. The team is super professional and responsive. Worth every rupee!"
4. **Sneha Patel** — MCA, Ahmedabad | ⭐⭐⭐⭐⭐ | "The team guided me through every step. My project won the best project award in my college! Cannot thank XEN-O1 enough!"

Each card: Gradient avatar circle with initials, name, college, star rating (gold stars), review text, domain badge

---

### SECTION 10: BLOG

**3 Blog Cards in a row:**
1. "Top 10 Final Year Project Ideas for 2025" — AI/ML | `https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600`
2. "How to Write an IEEE Research Paper — Complete Guide" — Research | `https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600`
3. "Blockchain Projects That Will Get You Hired" — Blockchain | `https://images.unsplash.com/photo-1639762681057-408e52192e55?w=600`

Each card: Image top, category pill, title, 2-line excerpt, "Read More →"
Hover: card lifts with 3D shadow, image zooms 1.08x

---

### SECTION 11: CONTACT

**Left — Contact Info Card (glassmorphism):**
- 📞 +91 95156 67238
- ✉️ xeno1.solutions@gmail.com
- 📸 @the.xen.o1 (Instagram)
- 🌐 www.xen-o1.com
- 💬 "Chat on WhatsApp" button (green glow, opens wa.me/919515667238)

**Right — Contact Form (glassmorphism):**
- Name | Email | Phone | Domain (dropdown: AI/ML, Blockchain, Web Dev, App Dev, Data Science, NLP, Computer Vision, Other) | Message textarea
- Submit button: "Send Message 🚀" (gold gradient, 3D press on click)
- On submit success: Full-screen overlay with animated green checkmark + "We'll contact you within 24 hours!"

**Background:** Dark background with 3 large blurred orbs (purple + gold + cyan) floating in corners

---

### SECTION 12: FOOTER

- XEN-O1 logo centered (glowing X + text)
- Tagline: "India's #1 Final Year Project Mentorship Platform"
- 3 social icons: Instagram | WhatsApp | Email — glowing on hover
- Quick links: Home · Projects · Domains · Services · Journal Paper · Contact
- Copyright: "© 2025 XEN-O1. All Rights Reserved. | www.xen-o1.com"
- **Bottom scrolling ticker (marquee):**
  `XEN-O1 ✦ Empowering Innovation ✦ 500+ Students Helped ✦ 100+ Projects ✦ IEEE Certified ✦ Scopus Indexed ✦ 9+ Domains ✦`
  — White text on dark background, auto-scrolling left

---

## 🎭 MANDATORY 3D EFFECTS — ALL MUST BE IMPLEMENTED:

1. **CSS 3D Text Shadow** — Hero title: 8 layered text-shadows for 3D depth, gold gradient
2. **Mouse-Tracking 3D Tilt** — All project & domain cards: `perspective(1000px) rotateX() rotateY()` via JS mousemove
3. **3D Flip Cards** — Services: `rotateY(180deg)` on hover, `transform-style: preserve-3d`
4. **Rotating Wireframe Sphere** — Hero right: CSS or Three.js icosahedron with gold lines
5. **Canvas Star Field** — 300 particles on `<canvas>`, parallax on mouse, 3 depth layers
6. **Orbiting Rings** — Intro screen: 3 CSS rings orbiting X logo at different speeds/tilts
7. **Scroll Counter Animation** — Stats: count from 0 to final value via IntersectionObserver
8. **Neon Glow Borders** — Cards: animated `box-shadow` keyframe pulsing on hover
9. **3D Card Carousel** — Testimonials: CSS 3D `rotateY` around Y-axis
10. **Glassmorphism** — Navbar, cards, contact: `backdrop-filter: blur(20px)`, rgba backgrounds
11. **Magnetic Button Effect** — CTA buttons: mouse position tracking, slight translateX/Y follow
12. **Custom Cursor** — Glowing gold dot + larger ring, follows mouse with slight lag
13. **Scroll Progress Bar** — Thin gold line at top, width 0%→100% as user scrolls
14. **Parallax Scrolling** — Background orbs and stars move at 0.3x scroll speed
15. **Intersection Observer Reveals** — Every section enters with `translateY(40px) + opacity:0` → `translateY(0) + opacity:1`, staggered children
16. **Floating Orbs** — 3+ large blurred orbs per section, CSS keyframe drift animation
17. **Typewriter Effect** — Intro brand name: letter-by-letter reveal with cursor blinking
18. **Page Intro Vault Door** — Intro screen splits vertically and slides out
19. **Pulsing WhatsApp Button** — Fixed bottom-right, green glow pulse animation
20. **Smooth Scroll** — `scroll-behavior: smooth` + GSAP ScrollTrigger for section transitions
21. **Filter Animation** — Project filter: cards fade + translateY out, filtered cards fade in
22. **Form Press Effect** — Submit button: slight `scale(0.97) translateY(2px)` on click

---

## 🛠️ TECHNOLOGY STACK FOR BASE44:

```html
<!-- Add these CDN links in <head> -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
```

- **HTML5** with semantic structure
- **CSS3** with custom properties (variables), `@keyframes`, `transform-style: preserve-3d`
- **Vanilla JavaScript** for all interactions
- **Three.js** for 3D wireframe globe
- **GSAP + ScrollTrigger** for scroll animations
- **Canvas API** for particle star field
- **IntersectionObserver API** for scroll reveals and counters
- **Google Fonts:** Outfit, Plus Jakarta Sans, Inter, JetBrains Mono

---

## ⚡ PERFORMANCE RULES:

- `will-change: transform` on all animated elements
- Throttle mousemove events to 60fps with `requestAnimationFrame`
- Lazy load all images below fold with `loading="lazy"`
- Debounce scroll event listeners
- Use CSS transforms only (no layout-triggering properties)

---

## 📱 RESPONSIVE BREAKPOINTS:

- **Mobile (< 768px):** 1 column, 3D effects simplified, smaller text, hamburger menu
- **Tablet (768px–1199px):** 2 columns, tilt effects active
- **Desktop (≥ 1200px):** Full 3D experience, 4 columns, all effects

---

## 🎯 FINAL RESULT REQUIREMENT:

The finished website must feel like a combination of:
- **Apple.com** — premium, clean, smooth animations
- **NASA Mission Control** — dark, data-driven, futuristic
- **Top-tier Tech Agency** — glassmorphism, 3D cards, neon glows

Every pixel must say "PREMIUM". When an engineering student visits this website, they must immediately feel that XEN-O1 is the most professional, trustworthy, and impressive project mentorship platform in India.

> **BASE44 INSTRUCTION:** Generate this as a **complete single HTML file** with all CSS in `<style>` and all JavaScript in `<script>` tags. Use only CDN libraries (no npm). All 100+ projects must be hardcoded as a JavaScript array and rendered dynamically. Prioritize visual impact, smoothness, and 3D effects above all else.