const pages = [
  "สุขสันต์วันเกิดพี่ขิมม 🎉",
  "ขอให้ทุกอย่างที่พี่ตั้งใจเป็นไปอย่างที่หวัง",
  "กินอิ่ม นอนหลับ นอนอ้วน (ถึงจะอ้วนอยู่แล้ว)",
  "หรือจะวาโรก้อยิงโหด 30 kill",
  "อะนิ้ สปอยให้อ่านแล้วกันนะ",
  "https://drive.google.com/file/d/1zXf7EVx0-WuAEpRfKuc2_4j3SDNUXzaQ/view?usp=drivesdk",
  "ของจริงไว้รอ ตอนนั้นแลัวกันหน๋ะ",
  "แหะแหะ",
  "อีกรอบน้ะ",
  "https://drive.google.com/file/d/1zXf7EVx0-WuAEpRfKuc2_4j3SDNUXzaQ/view?usp=drivesdk",
  "สุดท้ายนี้ อยากจะบอกพี่ขิมว่าา",
  "ว่าาาาาาาาาาาาาาาาาาาาาาาาาาาาาาา",
  "ขอให้พี่ขิมในวัย 19 ปี (แก่แล้ว นิดนึง) มีความสุข มากๆ หน๋ะ ขอให้ยิ้มเย้อ ๆ นอนเต็มอิ่มทุ้กกกกวัน วันไหนยิ้มก้ยิ้มกับพี่ขิมด้วยหน๋ะ อรืม วันไหนพี่ขิมไม่ยิ้มก้จะไม่มีควาสุขด้วยเรยหน๋ะ เพราะงั้นพี่ขิมต้องยิ้มบ่อยๆหน๋า น้องปังชอบรอยยิ้มของพี่ขิมที่สุด อาจจะมีบ้างบางทีที่น้องปังทำตัวไม่ค่อยน่ารัก ก้อยากจะให้พี่ขิมเอนดูต่อไปเรื่อยๆหน๋า ขอโทดที่บางทีฉันอาจจะกะโปกอ๊องๆไปบ้าง (เยอะ) เห๋อ ไม่รุ้ละ เอาเปนว่า มีความสุขกับฉันไปนานๆเถิดหน๋า อย่าแอบไปมีความสุขคนเดียวเลยหน๋า",
];

function safePlay(audio, vol) {
  if (!audio) return;
  audio.volume = vol;
  const p = audio.play();
  if (p !== undefined) {
    p.catch(() => {
      document.addEventListener("click", () => audio.play(), { once: true });
    });
  }
}

const intro = document.getElementById("intro");
for (let i = 0; i < 25; i++) {
  const s = document.createElement("div");
  s.className = "intro-sparkle";
  s.innerHTML = "✨";
  s.style.left = Math.random() * 100 + "vw";
  s.style.fontSize = Math.random() * 10 + 12 + "px";
  document.body.appendChild(s);
  setTimeout(() => s.remove(), 4000);
}

setTimeout(() => {
  intro.classList.add("fade-out");
  setTimeout(() => intro.remove(), 1500);
}, 3500);

let page = 0,
  charIndex = 0;
let typing = false;
const speed = 60;

const textEl = document.getElementById("text");
const card = document.getElementById("card");
const openMusic = document.getElementById("openMusic");
const mainMusic = document.getElementById("mainMusic");
const nextBtn = document.getElementById("nextBtn");

function typeText(target, text, buttonToControl) {
  if (typing) return;
  typing = true;

  const button = buttonToControl || document.getElementById("nextBtn"); 

  if (button) {
      button.disabled = true;
      button.style.opacity = "0.5";
      button.style.cursor = "not-allowed";
  }

  target.innerHTML = "";
  charIndex = 0;

  function loop() {
    if (charIndex < text.length) {
      target.innerHTML += text.charAt(charIndex++);
      setTimeout(loop, speed);
    } else {
      typing = false;
      
      if (button) {
          button.disabled = false;
          button.style.opacity = "1";
          button.style.cursor = "pointer";
      }
    }
  }
  loop();
}
const slide = document.getElementById("slide");

const imgs = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
].map((src) => {
  const i = document.createElement("img");
  i.src = src;
  slide.appendChild(i);
  return i;
});

let idx = 0;
imgs[0].classList.add("active");

setInterval(() => {
  imgs[idx].classList.remove("active");
  idx = (idx + 1) % imgs.length;
  imgs[idx].classList.add("active");
}, 3000);

function next() {
  if (typing) return;
  if (page === pages.length - 3) return showImportant();
  page++;
  typeText(textEl, pages[page]);
}

function showImportant() {
  setTimeout(() => {
    openMusic.pause();
    openMusic.currentTime = 0;

    safePlay(mainMusic, 0.5);
  }, 800);

  const soft = document.createElement("div");
  soft.className = "soft-overlay";
  document.body.appendChild(soft);

  card.classList.add("fade-out");
  setTimeout(() => card.remove(), 1500);

  const sparkleInt = setInterval(() => {
    const s = document.createElement("div");
    s.className = "sparkle";
    s.innerHTML = "✨";
    s.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 6000);
  }, 400);

  setTimeout(() => {
    const box = document.createElement("div");
    box.className = "important fade-in";

    const title = document.createElement("div");
    title.className = "important-title";
    title.innerHTML = "✨ สำหรับพี่ขิมโดยเฉพาะเลยหน๋ะ ✨";

    const slide = document.createElement("div");
    slide.className = "slideshow";

    const msg = document.createElement("div");
    msg.className = "important-text";

    const btn = document.createElement("button");
    btn.innerHTML = "ไปต่อ 💖";
    
    btn.onclick = () => {
      btn.disabled = true;
      btn.style.opacity = "0.5";
      btn.style.cursor = "not-allowed";

      clearInterval(sparkleInt);
      box.classList.add("fade-out");
      soft.classList.add("fade-out");
      setTimeout(() => {
        box.remove();
        soft.remove();
        celebrate();
      }, 1500);
    };

    box.append(title, slide, msg, btn);
    document.body.appendChild(box);
    typeText(msg, pages[pages.length - 2], btn); 
  }, 900);
}

function celebrate() {
  const canvas = document.createElement("canvas");
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d");
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  const hearts = [];
  function heart(x, y) {
    for (let i = 0; i < 30; i++) {
      hearts.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 3,
        vy: (Math.random() - 0.5) * 3,
        life: 100,
      });
    }
  }

  const fireworks = [];

  function explode(x, y) {
    const colors = ["#ff4d6d", "#ffd166", "#c77dff", "#4cc9f0", "#ffafcc"];
    for (let i = 0; i < 80; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 6 + 2;
      fireworks.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 60,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
  }

  function draw() {
    ctx.fillStyle = "rgba(0,0,0,0.18)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    hearts.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;
      p.life--;
      ctx.fillStyle = "hotpink";
      ctx.fillText("❤", p.x, p.y);
      if (p.life <= 0) hearts.splice(i, 1);
    });

    fireworks.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;
      p.life--;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
      ctx.fill();
      if (p.life <= 0) fireworks.splice(i, 1);
    });

    requestAnimationFrame(draw);
  }
  draw();

  const wrap = document.createElement("div");
  wrap.className = "final-wrapper";

  const cake = document.createElement("div");
  cake.className = "cake";
  cake.innerHTML = "🎂";

  const text = document.createElement("div");
  text.className = "handwritten";
  text.style.opacity = 1;

  cake.onclick = () => {
    const rect = cake.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    cake.innerHTML = "💥";
    explode(x, y);
    setInterval(
      () =>
        heart(
          Math.random() * canvas.width,
          (Math.random() * canvas.height) / 2
        ),
      800
    );
    setTimeout(() => cake.remove(), 600);

    setTimeout(() => {
      cake.classList.add("fade-out");
      typeText(text, pages[pages.length - 1]);
    }, 900);
  };

  wrap.append(cake, text);
  document.body.appendChild(wrap);
}

typeText(textEl, pages[0]);
setTimeout(() => safePlay(openMusic, 0.1), 500);
