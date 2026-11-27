const FULL_PARAGRAPH = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.";

const SIZE_TO_PARAGRAPHS = {
    S: 1,
    M: 2,
    L: 3,
    XL: 4
};

const MIN_SENTENCES = 2;

const SENTENCES = FULL_PARAGRAPH.match(/[^.]+\./g).map((sentence) => sentence.trim());

let currentText = '';

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function buildParagraph() {
    const count = randomInt(MIN_SENTENCES, SENTENCES.length);
    return SENTENCES.slice(0, count).join(' ');
}

function getSelectedSize() {
    const selected = document.querySelector('input[name="size"]:checked');
    return selected ? selected.value : 'M';
}

function generateLoremIpsum() {
    const paragraphCount = SIZE_TO_PARAGRAPHS[getSelectedSize()];
    const paragraphs = [];

    for (let i = 0; i < paragraphCount; i++) {
        paragraphs.push(buildParagraph());
    }

    currentText = paragraphs.join('\n\n');

    const output = document.getElementById('lorem-output');
    output.innerHTML = '';

    paragraphs.forEach((paragraph) => {
        const element = document.createElement('p');
        element.textContent = paragraph;
        output.appendChild(element);
    });
}

function copyToClipboard() {
    if (!currentText) return;

    navigator.clipboard.writeText(currentText).then(() => {
        const button = document.getElementById('copy-button');
        const originalContent = button.innerHTML;
        button.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
        button.style.backgroundColor = '#2ea043';

        setTimeout(() => {
            button.innerHTML = originalContent;
            button.style.backgroundColor = '';
        }, 2000);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('generate-button').addEventListener('click', generateLoremIpsum);
    document.getElementById('copy-button').addEventListener('click', copyToClipboard);

    document.querySelectorAll('input[name="size"]').forEach((input) => {
        input.addEventListener('change', generateLoremIpsum);
    });

    generateLoremIpsum();
});
