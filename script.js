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
