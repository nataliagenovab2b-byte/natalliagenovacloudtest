fetch('legal-data.json').then(response => response.json()).then(data => {
  const key = document.body.dataset.legal;
  const text = data[key] || '';
  const firstBreak = text.indexOf('\n');
  document.getElementById('legal-text').textContent = firstBreak >= 0 ? text.slice(firstBreak + 1) : text;
}).catch(() => { document.getElementById('legal-text').textContent = 'Документ не удалось загрузить.'; });
