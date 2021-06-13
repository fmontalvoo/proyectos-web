async function loadLocale(locale = 'es') {
    // const locale = navigator.language;
    const file = await fetch(`./assets/locale/locale-${locale}.json`);
    return await file.json();

}

async function changeLanguage(locale) {
    const lang = await loadLocale(locale);

    const pageTitle = document.getElementById('page_title');
    pageTitle.innerText = lang.page_title;

    const btnEs = document.getElementById('btn-es');
    btnEs.innerText = lang.btn_es;
    const btnEn = document.getElementById('btn-en');
    btnEn.innerText = lang.btn_en;

    btnEs.addEventListener('click', () => changeLanguage('es'));
    btnEn.addEventListener('click', () => changeLanguage('en'));

    const title = document.getElementById('title');
    title.innerText = lang.title;

    const content = document.getElementById('content');
    content.innerText = '';
    for (const line of lang.content) {
        content.innerText += line;
    }
}

// Carga el lenguaje cuando la pagina termina de cargar.
document.addEventListener("DOMContentLoaded", function (event) {
    changeLanguage();
});