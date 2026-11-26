# Portfolio Architecture & Design Rules (GitBook / Modern SaaS)

Bu sənəd layihənin bütün komponentləri və stilləri üçün **məcburi** arxitektura və dizayn qaydalarını müəyyən edir.

## 1. Dizayn Üslubu (GitBook Tərzi)
- **Müasir, hava alan (airy) və strukturlaşdırılmış** SaaS / dokumentasiya estetikası (`https://www.gitbook.com/` üslubunda).
- **Yumşaq künclər**: Kartlar və əsas konteynerlər üçün `border-radius: 12px` və `16px`.
- **Sərt kvadrat qutular və mənasız etiketlər QADAĞANDIR** (məsələn, "PORTFOLIO 2026" kimi etiketlər olmamalıdır).
- **Neon və ağır gradientlər QADAĞANDIR**.

## 2. Rəng Palitrası (Modern SaaS / GitBook)
- `--bg-primary: #FFFFFF` (təmiz ağ)
- `--bg-secondary: #F8FAFC` (bölmələr arası yumşaq buz bozu)
- `--surface: #FFFFFF`
- `--border: #E2E8F0` (`1px solid #E2E8F0`)
- `--shadow-soft: 0 4px 20px -2px rgba(15, 23, 42, 0.05)` (çox yüngül yumşaq dərinlik)
- `--text-primary: #0F172A` (tünd göy-boz)
- `--text-secondary: #475569` (köməkçi mətn)
- `--accent: #2563EB` (GitBook mavisi)
- `--accent-soft: #EFF6FF` (yumşaq hover və badge fonu)

## 3. İxtisas Məhdudiyyəti
- **"Mexatronika və Robototexnika Mühəndisliyi"** YALNIZ `Haqqımda / Təhsil` bölməsində Bakı Mühəndislik Universiteti təhsil məlumatı kimi qeyd olunmalıdır.
- Saytın başlığında (Hero), layihələrdə və ya digər bölmələrdə əsas fokus yalnız **Frontend Development** olmalıdır.

## 4. Məlumat Mənbəyi və Dinamik API
- Mətnlər, profil, bacarıqlar, sertifikatlar və UI etiketləri `src/data/portfolioData.js` faylından `import` edilir.
- `Projects` bölməsi `https://api.github.com/users/NihadJabrailov/starred` endpoint-indən dinamik məlumat çəkir (cache + fallback ilə).

## 5. Responsivlik və Kod Keyfiyyəti
- Mobil (`< 768px`) və desktop (`>= 768px`) ekranlarda qüsursuz düzülüş və animasiya.
- Bütün komponentlər `oxlint` qaydalarına tam uyğun olmalıdır.
