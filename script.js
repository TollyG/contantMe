const submitBtn = document.getElementById("button");
const successResponse = document.querySelector(".success");

const fields = [
  { id: "first_name" },
  { id: "last_name" },
  { id: "email" }
];

// const input = document.getElementById("field.id")

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let isValid = true;

  fields.forEach((field) => {
    const inputName = document.getElementById(field.id);
    const errorP = inputName.closest("div").nextElementSibling;

    if (!inputName.value.trim()) {
      inputName.classList.add("input-error");
      inputName.classList.remove("input-success");
      errorP.classList.add("show-error");
      isValid = false;
    } else {
      inputName.classList.add("input-success");
      inputName.classList.remove("input-error");
      errorP.classList.remove("show-error");
    }
  });

  const textMessage = document.getElementById("message");
  const messageError = textMessage.nextElementSibling;

  if (!textMessage.value.trim()) {
    messageError.classList.add("show-error");
    textMessage.classList.add("input-error");
  } else {
    messageError.classList.remove("show-error");
    textMessage.classList.remove("input-error");
  }

  // for the query
  const radio1 = document.getElementById("query1");
  const radio2 = document.getElementById("query2");
  const radioError = radio1.closest(".container_name").nextElementSibling;

  if (!radio1.checked && !radio2.checked) {
    radioError.classList.add("show-error");
    isValid = false;
  } else {
    radio2.classList.remove("show-error");
    radio2.classList.add("input-success");
  }

  const consent = document.getElementById("consent");
  const consentError = consent.closest("div").nextElementSibling;

  if (!consent.checked) {
    consentError.classList.add("show-error");
    isValid = false;
  } else {
    consentError.classList.remove("show-error");
  }

  if (isValid) {
    successResponse.style.display = "block";
  }
});
