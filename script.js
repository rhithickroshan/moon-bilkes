/* --- MODEL DATA --- */
const bikeModels = {
    "Royal Enfield": ["Classic 350", "Hunter 350", "Bullet 350", "Continental GT 650"],
    "TVS": ["Apache RTR 160", "Apache 200 4V", "Apache RR 310", "Ronin", "Raider 125", "Ntorq"],
    "Yamaha": ["R15 V4", "MT-15 V2", "XSR 155", "FZ-S Fi", "Aerox"],
    "Hero": ["Splendor Plus", "HF Deluxe", "Xtreme 125R"],
    "Bajaj": ["Pulsar 125", "Pulsar N160", "Pulsar NS200"],
    "Honda": ["SP 125", "Activa", "Shine", "Unicorn", "Hornet"]
};

/* --- UPDATE DROPDOWN --- */
function updateModels() {
    const brandSelect = document.getElementById("brand");
    const modelSelect = document.getElementById("model");
    const selectedBrand = brandSelect.value;

    // Clear existing options
    modelSelect.innerHTML = '<option value="" disabled selected>-- Select Model --</option>';

    if (selectedBrand && bikeModels[selectedBrand]) {
        bikeModels[selectedBrand].forEach(model => {
            let option = document.createElement("option");
            option.value = model;
            option.text = model;
            modelSelect.add(option);
        });
    }
}

/* --- SEND TO WHATSAPP --- */
function sendWhatsapp() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const brand = document.getElementById("brand").value;
    const model = document.getElementById("model").value;

    if(name === "" || phone === "" || brand === "") {
        alert("Please fill in all details to proceed.");
        return;
    }

    const message = `*NEW BOOKING ENQUIRY* \n\n` +
                    `*Name:* ${name}\n` +
                    `*Phone:* ${phone}\n` +
                    `*Brand Interest:* ${brand}\n` +
                    `*Model Selected:* ${model}\n` +
                    `--------------------------\n` +
                    `Please confirm availability.`;

    const encodedMsg = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919840636309?text=${encodedMsg}`;

    window.open(whatsappUrl, '_blank').focus();
}