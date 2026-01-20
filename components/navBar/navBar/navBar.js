/*========================================================
   -- Async & Menu Logic -- By Lyes: 19/01/2026
=========================================================*/

async function loadNavBar() {
    try {
        // 1️⃣ Fetch le HTML du composant
        const response = await fetch('/components/navBar/navBar/navbar.html');
        if (!response.ok) throw new Error('Loading navBar error!');

        const html = await response.text();
        document.getElementById('navBar').innerHTML = html;

        // 2️⃣ Attacher les événements après injection

        // Menu burger
        const burgerButton = document.getElementById('navButton');
        const navigate = document.getElementById('navig');
        if (burgerButton && navigate) {
            burgerButton.addEventListener('click', () => {
                burgerButton.classList.toggle('active');
                navigate.classList.toggle('active');
            });
        }

        // Dark / Light theme
        const icon = document.getElementById('iconSun');
        if (icon) {
            icon.addEventListener('click', () => {
                document.body.classList.toggle('dark-theme');
                icon.src = document.body.classList.contains('dark-theme')
                    ? "/images/projects/moon-projects.png"
                    : "/images/projects/sun-projects.png";
            });
        }

    } catch (err) {
        console.error(err);
    }
}

// Charger le navbar une fois que le DOM principal est prêt
loadNavBar();
