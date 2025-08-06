let langStrings = {};

async function loadLanguage(lang) {
  const res = await fetch(`lang/${lang}.json`);
  langStrings = await res.json();

  document.getElementById('title').textContent = langStrings.title;
  document.getElementById('itemCode').placeholder = langStrings.placeholder;
  document.querySelector('.pick').textContent = langStrings.pick_button;
}

function pickItem() {
  const code = document.getElementById('itemCode').value.trim();
  if (!code) {
    alert(langStrings.alert_error);
    return;
  }
  alert(langStrings.alert_success.replace('{code}', code));
  document.getElementById('itemCode').value = '';
}

document.getElementById('languageSelect').addEventListener('change', (e) => {
  loadLanguage(e.target.value);
});

// Default language
loadLanguage('en');
let translations = {};

async function loadLanguage(lang) {
  const response = await fetch(`${lang}.json`);
  translations = await response.json();
  document.getElementById("welcomeText").innerText = translations.welcome;
}

document.getElementById("language").addEventListener("change", (e) => {
  loadLanguage(e.target.value);
});

document.getElementById("pickBtn").addEventListener("click", () => {
  const name = document.getElementById("nameInput").value;
  const greeting = translations.greeting || "Hello";
  document.getElementById("welcomeText").innerText = `${greeting}, ${name}!`;
});

// Load default language
loadLanguage("el");
