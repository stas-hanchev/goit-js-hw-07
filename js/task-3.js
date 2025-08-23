const input = document.getElementById('name-input');
const span = document.getElementById('name-output');
input.addEventListener('input', (event) => {
    // const trimedValue = input.value.trim();
    const trimedValue = event.currentTarget.value.trim();
    span.textContent = trimedValue === '' ? 'Anonymous' : trimedValue;
});