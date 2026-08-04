# Product Requirements Document (PRD)
## Personal Portfolio Website — Olyvia Audy Djohari

**Versi:** 1.0
**Tanggal:** Agustus 2026
**Tech Stack:** React + Tailwind CSS

---

## 1. Overview

### 1.1 Tujuan Produk
Membangun personal portfolio website untuk Olyvia Audy Djohari, seorang Information Technology Student & Aspiring Full Stack Developer. Website ini berfungsi sebagai media untuk menampilkan profil, keahlian teknis, dan proyek-proyek yang telah dikerjakan, dengan tujuan utama mendukung pencarian kesempatan magang (internship).

### 1.2 Target Audience
- Recruiter / HR yang melakukan screening kandidat magang
- Hiring manager / tech lead yang menilai kemampuan teknis
- Sesama developer / komunitas tech

### 1.3 Prinsip Desain
- Modern, clean, dan interaktif — bukan portfolio statis biasa
- Pengalaman "wow factor" lewat animasi halus (bukan berlebihan/mengganggu)
- Dark-first aesthetic (Hero section gelap) dengan opsi Light Mode di bagian lain
- Responsive di semua device (mobile, tablet, desktop)

---

## 2. Tech Stack

| Layer | Teknologi |
|---|---|
| Framework | React (Vite atau Next.js — direkomendasikan Next.js untuk SEO & routing) |
| Styling | Tailwind CSS |
| Animasi | Framer Motion (reveal, fade, tilt) + Lenis (smooth scroll) |
| Icon | react-icons / lucide-react (untuk tech stack icons) |
| Deployment | Vercel |
| Form Contact (opsional) | EmailJS / Formspree / API route sendiri |

---

## 3. Design System

### 3.1 Color Palette — Light Mode

| Role | Nama Warna | Hex | Penggunaan |
|---|---|---|---|
| Primary | Prussian Blue | `#1C4EA7` | CTA Button, Link, Highlight |
| Secondary | Midnight Green | `#024D60` | Navbar, Card Hover, Section Title |
| Accent | Light Sea Green | `#2CACAD` | Icon, Gradient, Active State |
| Soft Accent | Sky Blue | `#75E2E0` | Glow, Cursor Light, Border |
| Background | Water | `#D9F5F0` | Light Mode Background |

### 3.2 Color Palette — Dark Mode

| Role | Hex |
|---|---|
| Background | `#081821` |
| Surface | `#0D2C38` |
| Card | `#123745` |
| Primary | `#2CACAD` |
| Accent | `#75E2E0` |
| Text | `#F5FFFF` |

### 3.3 Catatan Implementasi Warna
- Gunakan CSS variables / Tailwind theme extend agar mudah switch light-dark mode
- Gradasi halus dari `#081821` → `#024D60` dipakai sebagai background Hero, ditambah noise/grain tipis agar tidak terlihat flat
- Warna `#75E2E0` dipakai konsisten untuk semua efek glow (cursor, border hover, tombol)

---

## 4. Website Flow / Struktur Halaman

```
Hero Quote (fullscreen, no navbar)
    ↓
Hero Introduction
    ↓
About Me
    ↓
Tech Stack (icon carousel)
    ↓
Featured Projects (card + view detail)
    ↓
Contact
    ↓
Footer
```

Single-page scroll (SPA style) dengan navbar yang muncul setelah section Hero Quote.

---

## 5. Detail Setiap Section

### 5.1 🌊 Hero Quote
**Tujuan:** First impression yang dramatis dan personal sebelum masuk ke konten utama.

**Spesifikasi:**
- Fullscreen (100vh), **tanpa navbar**
- Background gelap dengan gradasi `#081821 → #024D60` + noise tipis
- Cursor memiliki efek cahaya (glow) mengikuti pergerakan mouse, warna `#75E2E0`
- Quote muncul secara perlahan dengan efek fade + blur
- Contoh copy: *"Every line of code is a step toward turning ideas into reality."*
- Di bawah quote: teks "Scroll to Explore" + ikon panah bawah yang bergerak pelan (bounce animation)

**Komponen React:** `HeroQuote.jsx`
**Dependency animasi:** Framer Motion (fade+blur), custom cursor tracker (mousemove listener + radial gradient follow)

---

### 5.2 👋 Hero Introduction
**Konten:**
- Headline: "Hello, I'm Olyvia Audy Djohari — Information Technology Student & Aspiring Full Stack Developer"
- Deskripsi singkat: "I enjoy building modern, responsive, and user-friendly web applications. I'm passionate about transforming ideas into meaningful digital experiences while continuously learning new technologies."
- Button CTA: **"View Projects & Download CV"** (dual action atau dua button terpisah — perlu diklarifikasi)
- Foto profil di sisi kanan dengan efek glow lembut di sekelilingnya

**Komponen React:** `HeroIntro.jsx`

**Perlu klarifikasi dari kamu:**
- Apakah "View Projects & Download CV" satu tombol dengan dua aksi, atau dua tombol terpisah?
- File CV (PDF) sudah siap untuk di-link?

---

### 5.3 About Me
**Konten:**
> Hi! I'm **Olyvia Audy Djohari**, an Information Technology student passionate about building modern and user-friendly web applications. I've worked with technologies such as **React, Next.js, Laravel, PHP, Node.js, PostgreSQL and MySQL**, to build full stack web applications. I enjoy learning by creating real projects that challenge me to think critically and write clean, maintainable code.
>
> Beyond web development, I'm currently expanding my knowledge in **Internet of Things (IoT), electronics, and Artificial Intelligence/Machine Learning (AI/ML)**. I enjoy exploring how software can interact with hardware and how intelligent systems can be used to solve real-world problems.
>
> I'm currently seeking an internship opportunity where I can collaborate with a team, gain hands-on industry experience, and continue growing as a Full Stack Developer while broadening my expertise in emerging technologies.

**Komponen React:** `AboutMe.jsx`
**Animasi:** Reveal on scroll (fade + translate + blur ringan)

---

### 5.4 Tech Stack
**Judul:** "Technologies I Use"
**Deskripsi:** "These are the technologies and tools I use to build modern web applications."

**Kategori & Item:**

| Kategori | Teknologi |
|---|---|
| Frontend | HTML, CSS, JavaScript, TypeScript, React, Tailwind CSS, Next.js |
| Backend | Node.js, Laravel, PHP |
| Database | MySQL, PostgreSQL, Supabase |
| Tools | Git, GitHub, VS Code, Figma, Vercel |

**Layout:** Semua icon di-mix jadi satu, ditampilkan sebagai **loop carousel** (baris atas dan bawah bergerak berlawanan arah, auto-scroll pelan — bukan per kategori terpisah)

**Interaksi:** Saat hover pada icon → muncul nama teknologi + warna berubah ke accent (`#2CACAD`)

**Komponen React:** `TechStackCarousel.jsx`
**Dependency:** CSS animation (marquee/infinite scroll) atau library seperti `react-fast-marquee`

---

### 5.5 🚀 Featured Projects
**Judul:** "Featured Projects"
**Deskripsi:** "Here are some of the projects I've built to strengthen my skills in full stack web development. Each project reflects my learning journey and problem-solving approach."

**Struktur Card:**
- Image (thumbnail project)
- Title
- Short description
- Link: GitHub + Live Web
- Button/link: **"View Details"** → membuka modal/halaman detail berisi:
  - Overview
  - Problem
  - Solution
  - Tech Stack yang dipakai
  - Features
  - Screenshot carousel (multiple images)

**Hover Effect:**
- Image sedikit zoom (3–5%)
- Card naik sedikit (translateY negative)
- Shadow berubah jadi lebih dalam/glow

**Komponen React:** `ProjectCard.jsx`, `ProjectDetailModal.jsx`
**Dependency:** Swiper.js / embla-carousel (untuk screenshot carousel di detail)

**Perlu klarifikasi dari kamu:**
- Daftar project apa saja yang mau ditampilkan (nama, deskripsi, link, screenshot)?
- View Details berupa modal popup atau halaman terpisah (`/projects/[slug]`)?

---

### 5.6 📬 Contact
**Judul:** "Let's Build Something Together"
**Konten:** Teks ajakan singkat (perlu ditentukan copy-nya)

**Channel kontak (button/icon):**
- Email
- LinkedIn
- GitHub
- WhatsApp

**Interaksi:** Tombol dengan efek **magnetic** ringan (tombol "tertarik" mengikuti posisi cursor saat didekati)

**Komponen React:** `Contact.jsx`

**Perlu klarifikasi dari kamu:**
- Link/handle aktual untuk Email, LinkedIn, GitHub, WhatsApp
- Apakah perlu form contact (nama, email, pesan) atau cukup direct link ke masing-masing platform?

---

### 5.7 Footer
**Konten:** "Designed & Developed by Olyvia Audy Djohari © 2026"

**Komponen React:** `Footer.jsx`

---

## 6. Spesifikasi Animasi (Detail Teknis)

| Section | Animasi |
|---|---|
| **Hero** | Cursor light 3D interaktif mengikuti mouse (glow `#75E2E0`); Quote fade + blur entrance; Background gradasi + noise tipis |
| **Scroll (global)** | Reveal animation tiap section (fade + translate + blur ringan) saat masuk viewport; Navbar transparan → solid saat mulai scroll; Smooth scroll pakai Lenis |
| **Project Cards** | Tilt effect ringan mengikuti posisi mouse (mouse-tracking rotateX/rotateY); Border glow saat hover; Image zoom 3–5%; Tombol shine effect bergerak pelan |
| **Tech Stack** | Carousel icon berjalan otomatis (atas-bawah berlawanan arah); Hover → tampil nama + ganti warna ke accent |
| **Contact** | Tombol dengan efek magnetic ringan |

**Library yang direkomendasikan:**
- `framer-motion` — reveal, fade, blur, entrance animation
- `lenis` — smooth scroll
- `react-fast-marquee` atau custom CSS keyframe — tech stack carousel
- Custom hook (mousemove + transform) — tilt effect & magnetic button & cursor light

---

## 7. Non-Functional Requirements

- **Responsive:** Mobile-first, breakpoint mengikuti Tailwind default (sm/md/lg/xl)
- **Performance:** Lazy load gambar project, optimasi animasi agar tidak drop FPS di device low-end (gunakan `will-change`, hindari animasi berat di mobile jika perlu)
- **Accessibility:** Kontras warna dark mode terhadap teks (`#F5FFFF` di atas `#081821`) sudah cukup baik; pastikan animasi punya opsi reduce-motion (`prefers-reduced-motion`)
- **SEO:** Meta title/description, Open Graph tags (jika pakai Next.js)
- **Cross-browser:** Chrome, Firefox, Safari, Edge terbaru

---

## 8. Task Breakdown Development

### Phase 0 — Setup & Foundation
- [ ] Inisialisasi project (Vite + React atau Next.js)
- [ ] Setup Tailwind CSS + custom theme (color palette light & dark mode di `tailwind.config.js`)
- [ ] Install dependency: framer-motion, lenis, react-icons/lucide-react, embla-carousel/swiper
- [ ] Setup struktur folder (`components/`, `sections/`, `assets/`, `data/`)
- [ ] Setup dark/light mode toggle (context/state)

### Phase 1 — Layout & Navbar
- [ ] Buat komponen Navbar (transparan → solid on scroll)
- [ ] Setup smooth scroll global dengan Lenis
- [ ] Setup routing/anchor per section

### Phase 2 — Hero Quote Section
- [ ] Build layout fullscreen tanpa navbar
- [ ] Implementasi background gradient + noise texture
- [ ] Implementasi cursor light tracker (mousemove + radial gradient)
- [ ] Animasi quote fade + blur entrance
- [ ] Scroll indicator (icon panah animasi bounce)

### Phase 3 — Hero Introduction Section
- [ ] Layout dua kolom (teks kiri, foto kanan)
- [ ] Efek glow di sekitar foto profil
- [ ] Button CTA (View Projects & Download CV)
- [ ] Reveal animation saat scroll masuk

### Phase 4 — About Me Section
- [ ] Layout teks (bisa dengan sedikit visual/foto pendukung)
- [ ] Reveal animation

### Phase 5 — Tech Stack Section
- [ ] Data mapping semua tech stack (icon + nama)
- [ ] Build komponen carousel infinite loop (2 baris, arah berlawanan)
- [ ] Hover state (nama muncul + warna accent)

### Phase 6 — Featured Projects Section
- [ ] Data structure project (title, image, description, tech, links, detail content)
- [ ] Build `ProjectCard` dengan hover effect (zoom, tilt, shadow)
- [ ] Build `ProjectDetailModal`/halaman detail (overview, problem, solution, tech stack, features, screenshot carousel)
- [ ] Integrasi carousel screenshot di detail view

### Phase 7 — Contact Section
- [ ] Layout ajakan + tombol channel (Email, LinkedIn, GitHub, WhatsApp)
- [ ] Implementasi magnetic button effect
- [ ] (Opsional) Form contact + integrasi EmailJS/Formspree

### Phase 8 — Footer
- [ ] Build footer sederhana dengan copyright

### Phase 9 — Polish & Optimization
- [ ] Testing responsive di berbagai device/breakpoint
- [ ] Optimasi gambar (compress, lazy load, next/image jika pakai Next.js)
- [ ] Testing performa animasi (Lighthouse, FPS check)
- [ ] Implementasi `prefers-reduced-motion` fallback
- [ ] Cross-browser testing

### Phase 10 — Deployment
- [ ] Setup deployment ke Vercel
- [ ] Custom domain (jika ada)
- [ ] SEO meta tags & favicon
- [ ] Final review & launch

---

## 9. Hal yang Masih Perlu Diklarifikasi/Dilengkapi

1. Daftar lengkap Featured Projects (nama, deskripsi, tech stack, link GitHub/live demo, screenshot)
2. Foto profil final
3. File CV (PDF) untuk tombol download
4. Link kontak aktual (email, LinkedIn, GitHub, WhatsApp)
5. Copy text ajakan di section Contact
6. Konfirmasi: Next.js atau React + Vite biasa?
7. Konfirmasi: Project detail berupa modal popup atau halaman terpisah?

---

*Dokumen ini adalah acuan pengembangan (living document) — dapat diperbarui seiring progres development.*
