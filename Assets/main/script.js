document.getElementById("korexForm").addEventListener("submit", async function (e) {
    e.preventDefault();
    let formData = new FormData(this);
    let message =
    document.getElementById("messages");
    try{
        let response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
        let result = await response.json();
          
        if (result.success) {
            message.style.display = "flex"
            message.style.color = "#6495ed";
     let name = 
     document.getElementById('name').value;
    //   const message ="Message  delivered!.";
      let info = `Nice one  ${name}!!, message Delivered Successfully.`;

     document.getElementById('messages').textContent = info;
            // message.innerText =  `Nice one  ${name}!!, message Delivered Successfully.`;
            this.reset();
        } else {
            message.style.display = "flex";
            message.style.color = "#ff0000";
            message.innerText = "Error Submitting Message. Please try again.";
        }
    } catch (error) {
        message.style.display ="flex";
        message.style.color = "#6895ed";
        message.innerText = "something went wrong. Please check your internet connection and try again.";
    }
});

const refreshBtn = document.getElementById('logo');

refreshBtn.addEventListener('click', () => {
  location.reload();
});


const dropdownButton = document.getElementById('connect');
const dropdown = document.getElementById('dropdown');

dropdownButton.addEventListener('click', () => {
  dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
});




function stimulateProcessing() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 6000);
    });
}
const loader =
document.getElementById('loader');
const send =
document.getElementById('scale');
send.addEventListener('click', async () => {
           loader.style.display = 'block';
           await stimulateProcessing();
           loader.style.display = 'none'
});