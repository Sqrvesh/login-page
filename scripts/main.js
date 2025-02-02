import { currentUser } from "../data/database.js";

document.querySelector(".js-main-page-name") .innerHTML = currentUser.name;