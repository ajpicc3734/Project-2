const form = document.getElementById('upload'); 
const image = document.getElementById('imageUpload'); 
const fileName = document.getElementById('fileName');

function uploadImage(e) { 
const formData = new FormData(); 
formData.append('image', image.value);
formData.append('imageName', fileName.value);
console.log(formData); 
}

form.addEventListener('submit', uploadImage);


window.addEventListener("load", function () {
    const form = document.getElementById("upload");

    function uploadImage(e) {
        e.preventDefault();
        const formData = new FormData(upload);
        for (let [name, value] of formData.entries()) {
            console.log(name, value);
        }
        fetch("/api/image", {
            method: "POST",
            body: formData,
        }).then((res) => {
            if (res.ok) {
                console.log("Completed!");
            }
        });
    }
    form.addEventListener("submit", uploadImage);
});