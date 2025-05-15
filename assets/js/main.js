/*===== MENU SHOW =====*/ /* Menü açma/kapatma fonksiyonunu tanımlar */
const showMenu = (toggleId, navId) => { /* toggleId ve navId parametreleri alır */
    const toggle = document.getElementById(toggleId), /* Menü butonunu seçer */
          nav    = document.getElementById(navId)    /* Menü kapsayıcısını seçer */

    if (toggle && nav) { /* Hem buton hem kapsayıcı varsa */
        toggle.addEventListener('click', () => { /* Butona tıklanınca */
            nav.classList.toggle('show') /* 'show' sınıfını ekler/kaldırır */
        })
    }
}
showMenu('nav-toggle','nav-menu') /* Fonksiyonu id'lerle çağırır */

/*==================== REMOVE MENU MOBILE ====================*/ /* Mobilde menüyü kapatma */
const navLink = document.querySelectorAll('.nav__link') /* Tüm menü bağlantılarını seçer */

function linkAction() { /* Bağlantıya tıklanınca çalışacak fonksiyon */
    const navMenu = document.getElementById('nav-menu') /* Menü kapsayıcısını alır */
    navMenu.classList.remove('show') /* 'show' sınıfını kaldırarak menüyü gizler */
}
navLink.forEach(n => n.addEventListener('click', linkAction)) /* Her bağlantıya tıklama olayı ekler */

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/ /* Kaydırmaya göre aktif link */
const sections = document.querySelectorAll('section[id]') /* id’si olan tüm section’ları seçer */

const scrollActive = () => { /* Scroll yapıldığında çağrılan fonksiyon */
    const scrollDown = window.scrollY /* Sayfanın dikey kaydırma miktarını alır */

    sections.forEach(current => { /* Her bölüm için */
        const sectionHeight = current.offsetHeight, /* Bölümün yüksekliği */
              sectionTop    = current.offsetTop - 58, /* Bölümün sayfa üstünden konumu (offset) */
              sectionId     = current.getAttribute('id'), /* Bölümün id’si */
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']') /* Menüdeki ilgili bağlantı */

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) { /* Eğer bu bölüm görünürse */
            sectionsClass.classList.add('active-link') /* 'active-link' sınıfını ekle */
        } else {
            sectionsClass.classList.remove('active-link') /* Aksi halde kaldır */
        }
    })
}
window.addEventListener('scroll', scrollActive) /* Scroll olayında fonksiyonu çağırır */

/*===== SCROLL REVEAL ANIMATION =====*/ /* ScrollReveal ayarları */
const sr = ScrollReveal({
    origin: 'top',      /* Animasyon başlangıç yönü */
    distance: '60px',   /* Hareket mesafesi */
    duration: 2000,     /* Animasyon süresi (ms) */
    delay: 200,         /* Başlangıç gecikmesi (ms) */
    // reset: true       /* Her kaydırmada resetlenir (isteğe bağlı) */
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {}); /* Belirli öğeleri göster */
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 }); /* Gecikmeli öğeler */
sr.reveal('.home__social-icon', { interval: 200 }); /* İkonları aralıklarla göster */
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 }); /* Diğer öğeler için aralık */
