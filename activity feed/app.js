const card = document.querySelector(".card");

const handleProfileModal = (event) => {
    const profileModal = document.querySelector(".card-dropdown");

    if (event.target.classList.contains("profile-name")) {
        card.classList.toggle("active");
        profileModal.classList.toggle("d-none");
    } else if (event.target.classList.contains("cancel-button")) {
        profileModal.classList.add("d-none");
        card.classList.remove("active");
    }
}

(function loadAllEventListeners() {
    card.addEventListener("click", handleProfileModal);
}) ();