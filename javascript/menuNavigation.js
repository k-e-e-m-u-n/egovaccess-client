import MenuNavigationUI from "../menuNavigationContent.js";
import APIRequest from "./menuNavigationApi.js";

const menuNavigation = document.querySelectorAll(".menu-navigation");

menuNavigation.forEach(navigation => {
    const headingTextUI = document.querySelector(".activity-feed span");

    navigation.addEventListener("click", () => {
        headingTextUI.textContent = navigation.textContent.toLowerCase() === "home" ? "Activity Feed" : navigation.textContent;

        switch (navigation.textContent.toLowerCase()) {
            case "home" :
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

                // mainScreenUI.innerHTML = `
                //  ${navigation.textContent}
                // `;

                
            break;
            default:
                console.log(false)
            break;
        }
    });
});

export default menuNavigation;