// Injected before hydration to avoid flash — sets data-theme before first paint
export function ThemeScript() {
  const script = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored === 'light' || stored === 'dark'
      ? stored
      : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
  } catch(e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
`.trim();

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
