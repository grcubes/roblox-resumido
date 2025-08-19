
let useDarkMode = false;
const darkModeButton = document.getElementById("dark-mode-button");

darkModeButton.addEventListener("click", () => {
    useDarkMode = !useDarkMode;

    if (useDarkMode)
    {
        document.body.classList.add("dark-mode");
        darkModeButton.textContent = "Light Mode";
    }
    else
    {
        document.body.classList.remove("dark-mode");
        darkModeButton.textContent = "Dark Mode";
    }
})