# Portfolio Architecture & Design Rules

Bu sənəd layihənin bütün komponentləri və stilləri üçün **məcburi** arxitektura və dizayn qaydalarını müəyyən edir.

## 1. Mütləq Qadağalar
- **SIFIR `box-shadow`**: Heç bir elementdə (kart, düymə, modal, navbar, input, teq) `box-shadow` istifadə etmək **QADAĞANDIR**. Qlobal olaraq `box-shadow: none !important;` tətbiq edilir.
- **SIFIR Neon / Gradient**: Parıltı (`glow`), `linear-gradient`, `radial-gradient`, bənövşəyi/mavi gradientlər və süni AI effektləri **QADAĞANDIR**.

## 2. Dizayn Dili ("Editorial Light" / Swiss Minimalist)
- **Flat (düz) estetika**: Elementlər yalnız `1px solid var(--border)` sərhədləri və nəfəs alan boşluqlar (whitespace) ilə ayrılır.
- **Hover keçidləri**: Hover zamanı yalnız `border-color: var(--border-strong)` və ya `background-color: var(--surface-hover)` tətbiq olunur (heç bir scale/lift/shadow effekti yoxdur).
- **Rəng palitrası** (`src/index.css` CSS dəyişənləri):
  - `--bg-primary: #FAFAFA`
  - `--surface: #FFFFFF`
  - `--surface-hover: #F4F4F5`
  - `--text-primary: #111827`
  - `--text-secondary: #52525B`
  - `--text-muted: #71717A`
  - `--border: #E4E4E7`
  - `--border-strong: #18181B`
  - `--accent: #18181B`
  - `--accent-text: #FFFFFF`

## 3. Tipoqrafiya
- **Əsas mətn və başlıqlar**: `Plus Jakarta Sans` (400, 500, 600, 700)
- **Texniki teqlər, tarixlər, indekslər, kod və meta-məlumatlar**: `JetBrains Mono` (400, 500)

## 4. Məlumat Mənbəyi (Single Source of Truth)
- Bütün mətnlər, başlıqlar, linklər, layihələr, sertifikatlar, bacarıqlar və UI etiketləri **YALNIZ** `src/data/portfolioData.js` faylından `import` edilməlidir.
- Komponentlərin (`.jsx` fayllarının) içinə statik/hardcode mətn yazmaq **QADAĞANDIR**.

## 5. Responsivlik və Kod Keyfiyyəti
- Mobil (`375px`) və desktop (`1440px`) ekranlarda daşma (`overflow-x`) olmadan təmiz düzülüş.
- Bütün komponentlər `oxlint` qaydalarına tam uyğun olmalıdır.
