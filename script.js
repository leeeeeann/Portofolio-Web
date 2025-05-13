// Navigasi horizontal card
const container = document.getElementById('cardContainer');
const cardWidth = 450; // width + gap

document.querySelector('.right-arrow').addEventListener('click', () => {
  container.scrollBy({ left: cardWidth, behavior: 'smooth' });
});

document.querySelector('.left-arrow').addEventListener('click', () => {
  container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
});

// Data project
const projectData = [
  {
    title: "Testing Unit on Nail Art Studio System",
    desc: "Used JaCoCo and Apache JMeter for testing coverage and performance. Focused on back-end testing reliability and reporting.",
    repo: "https://github.com/leeeeeann/JUnit-Project"
  },
  {
    title: "Self-Ordering Kiosk System",
    desc: "Developed in Java for Goldchick Restaurant. Enhanced ordering speed and accuracy.",
    repo: "https://github.com/leeeeeann/Self-Ordering-Kiosk-Goldchick-Java"
  },
  {
    title: "Java-Based Cashier System",
    desc: "A GUI system created for Goldchick's fast-food operations to handle sales transactions.",
    repo: "https://github.com/leeeeeann/Java-Cashier-System-Goldchick"
  },
  {
    title: "Real-Time Schedule Checking",
    desc: "Built using JSP for online cinema ticketing websites with user review capabilities.",
    repo: "https://github.com/leeeeeann/Cinema-WebbApp-Using-JSP"
  },
  {
    title: "Nail Art Reservation System",
    desc: "JSF-based online system for booking nail art appointments efficiently.",
    repo: "https://github.com/leeeeeann/Nail-Art-Web-Reservation-Using-JSF"
  },
  {
    title: "LechyLicious Recipe App",
    desc: "Designed in Figma for easy access to recipes without requiring user payments.",
    repo: "https://www.figma.com/files/team/1290528562409037571/project/109897847/Team-project?fuid=1290528560811594787"
  },
  {
    title: "Stock Monitoring App",
    desc: "Built using Android Studio for inventory tracking in small retail stores.",
    repo: "https://github.com/leeeeeann/Implementation-of-Android-Application-for-Stock-Monitoring-in-Small-Scale-Minimarket"
  }
];

// Popup modal logic
const modal = document.getElementById("popupModal");
const popupTitle = document.getElementById("popupTitle");
const popupDesc = document.getElementById("popupDesc");
const popupRepo = document.getElementById("popupRepo"); // tombol repo
const closeBtn = document.querySelector(".close");

// Open popup on card button click
document.querySelectorAll(".button").forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    popupTitle.textContent = projectData[index].title;
    popupDesc.textContent = projectData[index].desc;
    popupRepo.href = projectData[index].repo;
    popupRepo.style.display = "inline-block"; // pastikan terlihat
    modal.style.display = "block";
  });
});

// Close popup
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// Close if click outside modal
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
