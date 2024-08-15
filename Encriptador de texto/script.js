document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('input-text');
    const outputText = document.getElementById('output-text');
    const encryptBtn = document.getElementById('encrypt-btn');
    const decryptBtn = document.getElementById('decrypt-btn');
    const copyBtn = document.getElementById('copy-btn');
    const noMessageSection = document.getElementById('no-message');

    const encryptionRules = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    function encrypt(text) {
        return text.toLowerCase().split('').map(char => encryptionRules[char] || char).join('');
    }

    function decrypt(text) {
        let decrypted = text.toLowerCase();
        Object.entries(encryptionRules).forEach(([key, value]) => {
            decrypted = decrypted.replaceAll(value, key);
        });
        return decrypted;
    }

    function toggleOutputView(hasMessage) {
        if (hasMessage) {
            noMessageSection.style.display = 'none';
            outputText.style.display = 'block';
            copyBtn.style.display = 'block';
            outputText.style.height = 'auto';
        } else {
            noMessageSection.style.display = 'flex';
            outputText.style.display = 'none';
            copyBtn.style.display = 'none';
        }
    }
    
    encryptBtn.addEventListener('click', () => {
        const result = encrypt(inputText.value);
        outputText.value = result;
        toggleOutputView(result !== '');
        outputText.style.height = 'auto';
        outputText.style.height = outputText.scrollHeight + 'px';
    });
    
    decryptBtn.addEventListener('click', () => {
        const result = decrypt(inputText.value);
        outputText.value = result;
        toggleOutputView(result !== '');
        outputText.style.height = 'auto';
        outputText.style.height = outputText.scrollHeight + 'px';
    });

    copyBtn.addEventListener('click', () => {
        outputText.select();
        document.execCommand('copy');
        alert('Texto copiado al portapapeles');
    });

    toggleOutputView(false);
});