export const profile = {
  fullName: 'Nihad Cəbrayılov',
  role: 'Frontend Developer',
  birthDate: '14.05.2008',
  university: 'Bakı Mühəndislik Universiteti',
  major: 'Mexatronika və Robototexnika Mühəndisliyi',
  education: 'Bakı Mühəndislik Universiteti — Mexatronika və Robototexnika Mühəndisliyi',
  email: 'cabrailofnihad@gmail.com',
  location: 'Bakı, Azərbaycan',
  heroHeadline: 'Müasir, sürətli və istifadəçi yönümlü veb interfeyslər qururam.',
  heroSummary:
    'Frontend Developer olaraq təmiz kod arxitekturası, responsiv dizayn və yüksək performanslı React tətbiqləri hazırlayıram.',
  aboutBio:
    'Frontend Development sahəsində müasir veb texnologiyaları ilə təmiz, əlçatan və sürətli interfeyslər hazırlayıram. Komponent əsaslı arxitektura, responsiv dizayn və istifadəçi təcrübəsinin optimallaşdırılması əsas fokus sahələrimdir.',
};

export const socialLinks = [
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/NihadJabrailov',
    handle: '@NihadJabrailov',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/nihad-jabrayilov-6aa6a13a1/',
    handle: 'nihad-jabrayilov',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    url: 'https://www.instagram.com/cabrailof/',
    handle: '@cabrailof',
  },
  {
    id: 'frontend-mentor',
    label: 'Frontend Mentor',
    url: 'https://www.frontendmentor.io/profile/NihadJabrailov',
    handle: '@NihadJabrailov',
  },
];

export const navLinks = [
  { id: 'about', label: 'Haqqımda', href: '#about' },
  { id: 'projects', label: 'Layihələr', href: '#projects' },
  { id: 'certificates', label: 'Sertifikatlar', href: '#certificates' },
  { id: 'contact', label: 'Əlaqə', href: '#contact' },
];

export const skills = [
  'HTML',
  'CSS',
  'Bootstrap',
  'Tailwind CSS',
  'JavaScript',
  'React',
];

export const githubConfig = {
  username: 'NihadJabrailov',
  starredEndpoint: 'https://api.github.com/users/NihadJabrailov/starred',
  cacheKey: 'nihad_github_starred_cache_v1',
  cacheTtlMs: 1000 * 60 * 15,
};

export const fallbackStarredProjects = [
  {
    id: 1,
    name: 'porfolioPage',
    description: 'Modern GitBook üslubunda hazırlanmış şəxsi Frontend Developer portfolio layihəsi.',
    language: 'JavaScript',
    stargazers_count: 1,
    html_url: 'https://github.com/NihadJabrailov/porfolioPage',
    homepage: 'https://nihadjabrayilov.vercel.app/',
  },
];

export const certificates = [
  {
    id: 'cert-1',
    title: 'Frontend Web Development Fundamentals',
    issuer: 'Tədris Proqramı',
    date: '2025',
    imageUrl: '',
    credentialUrl: 'https://github.com/NihadJabrailov',
    description:
      'HTML, CSS, responsiv dizayn sistemləri və müasir JavaScript əsasları üzrə praktiki sertifikat.',
  },
  {
    id: 'cert-2',
    title: 'React & Modern UI Architecture',
    issuer: 'Frontend Sertifikatlaşdırma',
    date: '2026',
    imageUrl: '',
    credentialUrl: 'https://www.frontendmentor.io/profile/NihadJabrailov',
    description:
      'Komponent əsaslı React tətbiqləri, state idarəetməsi və performans optimallaşdırılması.',
  },
];

export const uiText = {
  hero: {
    scrollHint: 'Portfolioya keçid üçün aşağı sürüşdürün',
    ctaProjects: 'Layihələrə bax',
    ctaContact: 'Əlaqə saxla',
    deviceScreenTitle: 'Frontend Developer Workspace',
    deviceScreenSubtitle: 'React • JavaScript • Modern UI',
  },
  about: {
    kicker: 'Haqqımda',
    title: 'Profil, Bacarıqlar və Təhsil',
    subtitle: 'Texniki bacarıqlarım və akademik təhsil məlumatlarım.',
    skillsHeading: 'Texniki Bacarıqlar',
    educationHeading: 'Təhsil',
    birthLabel: 'Təvəllüd',
    locationLabel: 'Məkan',
  },
  projects: {
    kicker: 'Layihələr',
    title: 'GitHub Ulduzlu Layihələr',
    subtitle: 'GitHub üzərində ulduzladığım (starred) açıq mənbəli repozitoriyalar.',
    loadingText: 'GitHub repozitoriyaları yüklənir...',
    fallbackNotice: 'GitHub API sorğu limitinə görə keşlənmiş məlumat göstərilir.',
    emptyText: 'Hazırda ulduzlu repozitoriya tapılmadı.',
    noDescription: 'Bu repozitoriya üçün təsvir əlavə edilməyib.',
    githubLabel: 'GitHub',
    demoLabel: 'Live Demo',
    starsLabel: 'Ulduz',
  },
  certificates: {
    kicker: 'Sertifikatlar',
    title: 'Sertifikatlar və Diplomlar',
    subtitle: 'Əldə etdiyim sertifikatlar və peşəkar təlim sənədləri.',
    viewButton: 'Sertifikata bax',
    issuerLabel: 'Verən qurum',
    dateLabel: 'Tarix',
    credentialLinkLabel: 'Sənədi aç',
    noImageText: 'Sertifikat şəkli tezliklə əlavə olunacaq.',
    closeLabel: 'Bağla',
  },
  contact: {
    kicker: 'Əlaqə',
    title: 'Birlikdə İşləyək',
    subtitle: 'Layihə təklifləri, əməkdaşlıq və ya suallarınız üçün mənə birbaşa mesaj göndərə bilərsiniz.',
    emailLabel: 'Birbaşa E-poçt',
    copyButton: 'Kopyala',
    copiedButton: 'Kopyalandı',
    formHeading: 'Mesaj Göndər',
    nameLabel: 'Adınız',
    namePlaceholder: 'Ad və soyadınız',
    emailInputLabel: 'E-poçt ünvanınız',
    emailPlaceholder: 'email@example.com',
    messageLabel: 'Mesajınız',
    messagePlaceholder: 'Layihə və ya sualınız barədə qısa məlumat yazın...',
    submitButton: 'Mesajı Göndər',
    sendingButton: 'Göndərilir...',
    successMessage: 'Mesajınız uğurla qeydə alındı! Tezliklə sizinlə əlaqə saxlayacağam.',
    errorMessage: 'Zəhmət olmasa bütün xanaları düzgün doldurun.',
  },
  footer: {
    tagline: 'Təmiz interfeys və müasir frontend arxitekturası.',
    copyright: '© 2026 Nihad Cəbrayılov. Bütün hüquqlar qorunur.',
  },
};
