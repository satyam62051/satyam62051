// DOM Elements
const fileInput = document.getElementById('fileInput');
const compressLevel = document.getElementById('compressLevel');
const compressValue = document.getElementById('compressValue');
const compressBtn = document.getElementById('compressBtn');
const resultsTable = document.querySelector('#resultsTable tbody');

// Update compression level value
compressLevel.addEventListener('input', () => {
  compressValue.textContent = compressLevel.value;
});

// Compress Image Function
compressBtn.addEventListener('click', () => {
  const file = fileInput.files[0];
  if (!file) {
    alert('Please upload an image first!');
    return;
  }

  const compressionLevel = parseFloat(compressLevel.value);
  const reader = new FileReader();

  reader.onload = (event) => {
    const img = new Image();
    img.src = event.target.result;

    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      // Set canvas dimensions
      canvas.width = img.width;
      canvas.height = img.height;

      // Draw image on canvas
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Compress image
      canvas.toBlob(
        (blob) => {
          const compressedFile = new File([blob], file.name, {
            type: 'image/jpeg',
            lastModified: Date.now(),
          });

          // Display results in table
          const originalSize = (file.size / 1024).toFixed(2) + ' KB';
          const compressedSize = (blob.size / 1024).toFixed(2) + ' KB';
          const status = '✅ Compressed';

          const newRow = `
            <tr>
              <td>${file.name}</td>
              <td>${originalSize}</td>
              <td>${compressedSize}</td>
              <td>${status}</td>
            </tr>
          `;

          resultsTable.insertAdjacentHTML('beforeend', newRow);
        },
        'image/jpeg',
        compressionLevel
      );
    };
  };

  reader.readAsDataURL(file);
});
