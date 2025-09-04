export default function scrollToSection(id) {
    console.log(document.getElementById(id));
    document.getElementById(id).scrollIntoView({
        behavior: "smooth",
    });
}
