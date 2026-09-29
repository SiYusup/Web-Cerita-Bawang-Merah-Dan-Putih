# SYSTEM PROMPT / PRODUCT REQUIREMENTS DOCUMENT (PRD)

**Project:** Bawang Merah Bawang Putih - Interactive Bilingual Folktale Landing Page
**Role:** You are an Expert Front-End Developer.
**Goal:** Generate a single, highly interactive landing page using ONLY HTML5, CSS3, and Vanilla JavaScript. NO React, NO Vue, NO build tools.

## 1. TECH STACK & SETUP
*   **Structure:** Semantic HTML5 (`index.html`).
*   **Styling:** Tailwind CSS via CDN (`<script src="https://cdn.tailwindcss.com"></script>`). Use utility classes for styling. Create a `style.css` only for custom keyframes or strict overrides if absolutely necessary.
*   **Animations:** Include GSAP Core and ScrollTrigger via CDN.
*   **3D Background:** Include Three.js via CDN for a background particle effect on the Hero Section.
*   **Logic:** Vanilla JavaScript (`script.js`).

## 2. CONTENT DATA STRUCTURE (COPYWRITING)
In your `script.js`, use the following exact array of objects to populate the UI. This is mandatory for the bilingual toggle feature.

```javascript
const storyData = [
  {
    id: 1,
    image: "./assets/card1.png",
    title: {
      id: "Pengenalan Tokoh",
      jv: "Pambuka"
    },
    text: {
      id: "Pada zaman dahulu, hiduplah seorang gadis cantik dan baik hati bernama Bawang Putih. Ia tinggal bersama ibu tiri dan saudara tirinya, Bawang Merah, yang memiliki sifat pemalas, sombong, dan pendengki. Setiap hari, Bawang Putih disuruh mengerjakan seluruh pekerjaan rumah sendirian tanpa kenal lelah, sementara Bawang Merah hanya bersolek dan bermalas-malasan.",
      jv: "Ing jaman rumiyin, wonten lare estri ingkang ayu lan sae manahipun asma Bawang Putih. Piyambakipun gesang kaliyan ibu tiri lan sedherek tirinipun, Bawang Merah, ingkang gadhah watek kesed, gumedhe, lan drengki. Saben dinten, Bawang Putih dipun utus nglampahi sedaya padamelan griya piyambakan tanpa keraos sayah, dene Bawang Merah namung macak lan kesed-kesedan."
    }
  },
  {
    id: 2,
    image: "./assets/card2.png",
    title: {
      id: "Insiden Selendang di Sungai",
      jv: "Insiden Lepen"
    },
    text: {
      id: "Suatu hari, saat Bawang Putih mencuci pakaian di sungai, selendang kesayangan ibu tirinya hanyut terbawa arus. Dengan rasa takut dimarahi, ia menyusuri aliran sungai untuk mencarinya, hingga akhirnya ia tiba di sebuah gubuk milik seorang nenek tua misterius yang menyimpan selendang tersebut.",
      jv: "Satunggaling dinten, nalika Bawang Putih mangumbah rasukan ing lepen, selendang katresnanipun ibu tiri kintir kabekta ilining toya. Kanthi raos ajrih badhe dipun duka, piyambakipun nyusuri ilining lepen kagem madosi, ngantos pungkasanipun dumugi ing satunggaling gubug kagunganipun simbah putri ingkang nyimpen selendang wau."
    }
  },
  {
    id: 3,
    image: "./assets/card3.png",
    title: {
      id: "Hadiah Labu Kecil",
      jv: "Bebungah Waluh Alit"
    },
    text: {
      id: "Nenek itu bersedia mengembalikan selendangnya asalkan Bawang Putih mau membantunya membersihkan rumah. Karena sifatnya yang rajin, Bawang Putih menyelesaikannya dengan sangat baik. Sebagai upah, sang nenek menghadiahinya sebuah labu kecil. Saat dibelah di rumah, labu itu ternyata berisi emas dan permata yang berkilauan.",
      jv: "Simbah wau kersa mangsulaken selendangipun manawi Bawang Putih purun mbiyantu ngresiki griyanipun. Amargi watekipun ingkang sregep, Bawang Putih ngrampungaken padamelan kanthi sae sanget. Minangka opah, simbah paring bebungah wujud waluh alit. Nalika dipun sigar ing griya, waluh menika jebul isinipun emas lan permata ingkang sumunar."
    }
  },
  {
    id: 4,
    image: "./assets/card4.png",
    title: {
      id: "Siasat Serakah",
      jv: "Siasat Srakah"
    },
    text: {
      id: "Mengetahui hal itu, Bawang Merah dan ibunya merasa iri dan serakah. Keesokan harinya, mereka sengaja menghanyutkan selendang dan mendatangi gubuk nenek tersebut. Namun, Bawang Merah menolak membantu pekerjaan rumah dan langsung menuntut diberikan labu yang paling besar dengan sikap yang angkuh.",
      jv: "Mangertosi babagan menika, Bawang Merah lan ibunipun rumaos iri lan srakah. Ing dinten candhakipun, tiyang kalih wau sengaja ngintiraken selendang lan murugi gubugipun simbah wau. Nanging, Bawang Merah mboten purun mbiyantu padamelan griya lan langsung nyuwun waluh ingkang paling ageng kanthi watek ingkang gumedhe."
    }
  },
  {
    id: 5,
    image: "./assets/card5.png",
    title: {
      id: "Hukuman Keserakahan",
      jv: "Piwalesing Srakah"
    },
    text: {
      id: "Sesampainya di rumah, Bawang Merah dan ibunya mengunci pintu dan segera membelah labu besar itu dengan harapan mendapatkan emas yang lebih banyak. Namun malang, bukannya perhiasan, yang keluar justru hewan-hewan berbisa seperti ular dan kalajengking yang menyerang dan menghukum keserakahan mereka.",
      jv: "Dumugi ing griya, Bawang Merah lan ibunipun ngunci lawang lan enggal-enggal nyigar waluh ageng menika kanthi pangajeng-ajeng pikantuk emas ingkang langkung kathah. Nanging cilaka, sanes emas emas perhiasan, ingkang medal kepara kewan-kewan mawa bisa kadosta ula lan kalajengking ingkang nyerang lan ngukum tumindak srakahipun."
    }
  }
];
```

## 3. UI/UX LAYOUT REQUIREMENTS (HTML & Tailwind)
*   **Navbar (`<nav>`):** Fixed at the top, glassmorphism effect (`backdrop-blur-md bg-white/50`). Must contain a Logo text on the left and a Language Toggle Button on the right (ID / JV).
*   **Hero Section (`<header id="hero">`):** 
    *   Full screen height (`min-h-screen`).
    *   Contains an absolute positioned `<canvas id="bg-canvas">` for Three.js.
    *   Centered Text container with huge typography: "Bawang Merah Bawang Putih". Include a scroll down indicator.
*   **Story Container (`<main id="story-container">`):**
    *   A wrapper for the story cards.
    *   **DOM Generation:** Use JavaScript to loop through `storyData` and dynamically inject the HTML for the cards into this container.
    *   **Card Layout:** On mobile, stack vertically (`flex-col`). On desktop, display side-by-side (`grid-cols-2` or `flex-row`). Alternate the image position on desktop (e.g., Even IDs have Image on left, Odd IDs have Image on right). Use Tailwind shadow and rounded corners.

## 4. JAVASCRIPT LOGIC (`script.js`)
*   **Language State:** Initialize `let currentLang = 'id'`.
*   **Toggle Function:** Create a function attached to the Navbar toggle button. When clicked, it switches `currentLang` between 'id' and 'jv', then updates the DOM.
*   **Dynamic Rendering:** Create a function `renderCards()` that builds the innerHTML of `#story-container` using `storyData`. Ensure the injected text accesses `data.title[currentLang]` and `data.text[currentLang]`. When the language toggles, ONLY update the text content, do not re-render the entire card if possible, to avoid breaking GSAP animations (or re-initialize ScrollTrigger after rendering).

## 5. ANIMATIONS (GSAP & THREE.JS)
*   **Three.js Background:** Initialize a scene, camera, and renderer attached to `#bg-canvas`. Create a simple particle system (e.g., 200 small golden spheres/points) floating slowly upwards to simulate fireflies/magic dust. Ensure it resizes correctly on window resize.
*   **GSAP Hero Animation:** On load, fade in and slide up the Hero Title (`opacity: 0, y: 50` to `opacity: 1, y: 0`).
*   **GSAP ScrollTrigger:** Apply ScrollTrigger to every dynamically generated story card. As the card enters the viewport, it should fade in and translate slightly up.

## 6. DELIVERABLES
Please output the complete code in three distinct code blocks:
1. `index.html` (including CDN links)
2. `style.css` (minimal, mostly just basic resets if Tailwind isn't enough)
3. `script.js` (containing Three.js, GSAP logic, and dynamic rendering)