import APIRequest from "./menuNavigationApi.js";
import MenuNavigationUI from "./menunavigationContent.js";
// import menuNavigation from "./menuNavigation.js";

const card = document.querySelector(".card");

const handleProfileModal = event => {
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

    document.addEventListener("DOMContentLoaded", () => {
        const currentHomeContent = new APIRequest(),
                currentHomeUI = new MenuNavigationUI();

                currentHomeContent.getHomePosts()
                .then(data => {
                    currentHomeUI.displayHomePosts(data);
                })
                .catch(error => {
                    console.warn(error);
                    currentHomeUI.displayNoInternet();
                });
    });
}) ();