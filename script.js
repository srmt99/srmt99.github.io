const contentEl = document.getElementById("content");
const navLinks = Array.from(document.querySelectorAll("#section-links [data-section]"));

function render(section) {
    const template = document.getElementById(`tmpl-${section}`);
    if (!template) {
        return;
    }

    contentEl.innerHTML = "";
    contentEl.appendChild(template.content.cloneNode(true));
    const navSection = section === "masc-thesis" || section === "solar-tool" ? "projects" : section;
    setActiveNav(navSection);
}

function setActiveNav(section) {
    navLinks.forEach((link) => {
        if (link.dataset.section === section) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        render(link.dataset.section);
    });
});

document.addEventListener("click", (event) => {
    const target = event.target.closest("[data-section], [data-action]");
    if (!target) {
        return;
    }

    if (target.dataset.action) {
        event.preventDefault();
        render(target.dataset.action);
        return;
    }

    if (target.dataset.section && !target.closest("#section-links")) {
        event.preventDefault();
        render(target.dataset.section);
    }
});

render("home");
