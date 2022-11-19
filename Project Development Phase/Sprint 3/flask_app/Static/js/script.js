// feather.replace();
//                      form = document.querySelector('.upload')
//                      loading = document.querySelector("#loading")
//                      select = document .querySelector( "#upload-image");
//                      select.addEventListener( "change",(e) => {
//                          e.preventDefault();
//                          form.submit()
//                          form.style.visibility = "hidden";
//                          loading.style.display = 'flex';
//
//                      });



const fileUploader = document.getElementById('file-uploader');
fileUploader.addEventListener('change', (event) => {
  const files = event.target.files;
  window.location.href = "/predict.html";
  console.log('files', files);
});