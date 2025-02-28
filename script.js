// DOM Elements
const promptInput = document.getElementById('promptInput');
const generateBtn = document.getElementById('generateBtn');
const generatedImage = document.getElementById('generatedImage');
const downloadBtn = document.getElementById('downloadBtn');
const cropBtn = document.getElementById('cropBtn');
const filterBtn = document.getElementById('filterBtn');
const compressBtn = document.getElementById('compressBtn');

// Mock Image URL (Replace with AI API Integration)
const mockImageUrl = 'https://via.placeholder.com/500';

// Generate Image
generateBtn.addEventListener('click', () => {
  const prompt = promptInput.value.trim();
  if (!prompt) {
    alert('Please enter a prompt!');
    return;
  }

  // Simulate AI image generation (Replace with actual API call)
  generatedImage.src = mockImageUrl;
  generatedImage.style.display = 'block';
  downloadBtn.style.display = 'block';
});

// Download Image
downloadBtn.addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = generatedImage.src;
  link.download = 'hen-ai-image.png';
  link.click();
});

// Edit Tools (Mock Functions)
cropBtn.addEventListener('click', () => {
  alert('Crop tool clicked!');
});

filterBtn.addEventListener('click', () => {
  alert('Filter tool clicked!');
});

compressBtn.addEventListener('click', () => {
  alert('Compress tool clicked!');
});
