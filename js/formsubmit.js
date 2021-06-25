const contactForm = document.getElementById("contact-form");

const handleSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formDataObject = Object.fromEntries(formData.entries());
  fetch("https://formsubmit.co/ajax/a.tomzik@gmail.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formDataObject),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};

contactForm.addEventListener("submit", handleSubmit);
