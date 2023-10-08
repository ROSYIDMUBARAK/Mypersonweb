// Navbar==============================================================
document.getElementById("menu-icon").addEventListener("click", function () {
    var navList = document.querySelector(".navlist");
    navList.classList.toggle("active");
});

// Skills==============================================================
// Dapatkan semua elemen dengan class "progress-bar"
const skillBars = document.querySelectorAll(".progress");

// Lakukan iterasi melalui setiap elemen "progress-bar" dan atur lebarnya berdasarkan atribut "data-percent"
skillBars.forEach(skillBar => {
    const percent = skillBar.getAttribute("data-percent");
    skillBar.style.width = percent;
});


// Fungsi untuk menambahkan pengalaman kerja ke dalam DOM
function renderExperience() {
    const experienceList = document.getElementById("experience-list");

    experiences.forEach((experience) => {
        const experienceItem = document.createElement("div");
        experienceItem.classList.add("experience-item");

        const title = document.createElement("h3");
        title.textContent = experience.title;

        const company = document.createElement("span");
        company.textContent = experience.company;

        const duration = document.createElement("p");
        duration.textContent = experience.duration;

        const description = document.createElement("p");
        description.textContent = experience.description;

        experienceItem.appendChild(title);
        experienceItem.appendChild(company);
        experienceItem.appendChild(duration);
        experienceItem.appendChild(description);
        experienceList.appendChild(experienceItem);
    });
}



// Loop melalui data portofolio dan tambahkan elemen HTML ke dalam div "portfolio-content"
const Content = document.getElementById("portfolio-content");

portfolioData.forEach(item => {
    const portfolioItem = document.createElement("div");
    portfolioItem.className = "portfolio-item";

    const imageWrapper = document.createElement("div");
    imageWrapper.className = "image-wrapper";

    const image = document.createElement("img");
    image.src = item.imageSrc;
    image.alt = item.altText;

    const overlay = document.createElement("div");
    overlay.className = "overlay";

    const title = document.createElement("h3");
    title.textContent = item.title;

    const description = document.createElement("p");
    description.textContent = item.description;

    const button = document.createElement("button");
    const buttonLink = document.createElement("a");
    buttonLink.href = item.buttonLink;
    buttonLink.textContent = "View";
    buttonLink.target = "_blank";
    button.appendChild(buttonLink);

    overlay.appendChild(title);
    overlay.appendChild(description);
    overlay.appendChild(button);

    imageWrapper.appendChild(image);
    imageWrapper.appendChild(overlay);

    portfolioItem.appendChild(imageWrapper);

    Content.appendChild(portfolioItem);
});


// Portfolio Slider
const portfolioContent = document.querySelector('.portfolio-content');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updatePortfolio();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < 2) {
        currentIndex++;
        updatePortfolio();
    }
});

function updatePortfolio() {
    const translateXValue = currentIndex * -100;
    portfolioContent.style.transform = `translateX(${translateXValue}%)`;
}


// Contact==============================================================
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Ambil nilai dari formulir
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Lakukan apa pun yang diperlukan dengan data formulir (misalnya, kirim ke server atau tampilkan pesan)
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);

    // Tampilkan popup
    document.getElementById("successPopup").style.display = "block";

    // Clear formulir jika perlu
    document.getElementById("contactForm").reset();
});

// Menyembunyikan popup saat tombol Tutup diklik
document.getElementById("closePopup").addEventListener("click", function () {
    document.getElementById("successPopup").style.display = "none";
});