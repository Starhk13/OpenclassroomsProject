const changeTheme = document.querySelector("button");
const input = document.querySelector("input");
const theme = document.querySelector("body");

changeTheme.addEventListener("click", function (e) {
  theme.classList.toggle("dark");
  input.classList.toggle("input-dark");
  localStorage.setItem("input", "dark");
  changeTheme.classList.toggle("button-light");
  localStorage.setItem("button", "light");
  if (theme.classList.contains("dark")) {
    localStorage.setItem("Thème", "Dark");
    changeTheme.innerText = "Light";
  } else {
    localStorage.setItem("Thème", "Light");
    changeTheme.innerText = "Dark";
  }
});

const themeSauvegarde = localStorage.getItem("Thème");
if (themeSauvegarde === "Dark") {
  theme.classList.add("dark");
  changeTheme.classList.add("button-light");
  changeTheme.innerText = "Light";
  input.classList.add("input-dark");
}
