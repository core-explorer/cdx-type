if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // User prefers dark mode  
    document.body.classList.add('dark-mode');
} else {
    // User prefers light mode  
    document.body.classList.remove('dark-mode');
}
// Listen for changes in the preference  
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (event.matches) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});
const button = document.createElement('button');
button.id = 'darkModeButton';
button.textContent = '🌙';
button.title = 'Toggle Dark Mode';
button.style = 'border-radius: 10px; position: fixed; top: 10px; right: 10px; background-color:#222;';
document.body.appendChild(button);
button.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});