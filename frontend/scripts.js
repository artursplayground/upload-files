const handleUpload = async () => {
  const formData = new FormData();
  const inputFile = document.querySelector('input[type=file]');
  console.log(inputFile.files[0]);
  formData.append('file', inputFile.files[0]);

  fetch('http://localhost:5000/posts', {method: 'POST', body: formData})
  .catch(error => {
    console.log(error);
  })
}

