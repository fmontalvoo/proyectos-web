async function loadLocale() {
    const locale = navigator.language || 'en';
    const file = await fetch(`./assets/locale/locale-${locale.split('-')[0]}.json`);
    return await file.json();

}

document.addEventListener("DOMContentLoaded", async function (event) {
    const lang = await loadLocale();

    const pageTitle = document.getElementById('page_title');
    pageTitle.innerText = lang.page_title;

    const title = document.getElementById('title');
    title.innerText = lang.title;
});