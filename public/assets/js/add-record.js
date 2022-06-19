async function addRecrodForm(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="record-title"]').value;
  const artist = document.querySelector('input[name="record-artist"]').value;

  const response = await fetch(`/api/records`, {
    method: "POST",
    body: JSON.stringify({
      title,
      artist,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    document.location.replace("/rec");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".new-record-form")
  .addEventListener("submit", addRecrodForm);
