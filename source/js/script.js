var general = document.querySelector(".spec__wrapper--general");
var bowl = document.querySelector(".spec__wrapper--bowl");
var mainOption = document.querySelector(".spec__wrapper--options");
var generalHeader = general.querySelector(".spec__heading");
var bowlHeader = bowl.querySelector(".spec__heading");
var optionHeader = mainOption.querySelector(".spec__heading");

var showingContent = function (section, header) {
    header.addEventListener("click", function () {
        if (section.classList.contains("spec__wrapper--open")) {
            section.classList.remove("spec__wrapper--open")
        } else {
            section.classList.add("spec__wrapper--open")
        }
    });
};

showingContent(general, generalHeader);
showingContent(bowl, bowlHeader);
showingContent(mainOption, optionHeader);