function submitForm() {
  var form = document.querySelector("form");
  var formData = new FormData(form);

  var xhr = new XMLHttpRequest();
  xhr.open(form.method, form.action, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200 || xhr.status === 201) {
        console.log("Form submitted successfully");
      } else {
        console.error("Form submission failed");
      }
    }
  };
  xhr.send(formData);
}

submitForm();
