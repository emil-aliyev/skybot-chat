export function togglePanel(className) {

    function toggle(){
        const panel = document.querySelector(className);
        const currentMode = panel.style.display;
        panel.style.display = currentMode === "none" ? "grid" : "none";
    }

    return toggle;
}