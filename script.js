document.getElementById('generate-btn').addEventListener('click', function() {
    const url = document.getElementById('sketch-url').value;
    const width = document.getElementById('width').value || 600;
    const height = document.getElementById('height').value || 400;

    if (!url) {
        alert("🚨 Please enter a valid sketch URL!");
        return;
    }

    const embedCode = `<iframe src="${url}" width="${width}" height="${height}" frameborder="0"></iframe>`;
    document.getElementById('embed-code').value = embedCode;

    // Live Preview with a smooth transition
    const previewFrame = document.getElementById('preview');
    previewFrame.style.opacity = '0';
    setTimeout(() => {
        previewFrame.src = url;
        previewFrame.style.opacity = '1';
    }, 500);
});

document.getElementById('copy-btn').addEventListener('click', function() {
    const embedCode = document.getElementById('embed-code');
    embedCode.select();
    document.execCommand("copy");

    // Animate the button to show success
    this.innerText = "✅ Copied!";
    setTimeout(() => this.innerText = "Copy Code", 2000);
});
