document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const mainNav = document.getElementById("main-nav");

    menuToggle.addEventListener("click", () => {
        const isOpen = mainNav.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
    });

    mainNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            mainNav.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Ouvrir le menu");
        });
    });

    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const lightboxCaption = document.getElementById("lightbox-caption");
    const galleryPhotos = {
        "art-mural": ["10.05.24 (1)", "10.05.24 (2)", "10.05.25 (1)", "10.05.25 (2)", "10.05.25 (3)", "10.05.25 (7)", "10.05.26 (2)", "10.05.28 (2)", "10.05.28 (3)", "10.05.28 (5)", "10.05.28 (6)", "12.40.01 (3)", "12.40.02 (6)"],
        peinture: ["10.05.26", "10.05.27 (3)", "10.05.28 (4)", "12.40.02 (1)", "12.40.02 (7)"],
        sculptures: ["12.40.01 (1)", "12.40.01 (5)", "12.40.01 (6)", "12.40.01 (8)", "12.40.01", "12.40.02 (2)", "12.40.02 (8)"],
        animaux: ["12.40.02", "10.05.27 (4)", "12.40.01 (4)", "12.40.01 (7)", "12.40.02 (3)", "12.40.02 (5)", "12.40.02 (9)"],
        textiles: ["10.05.28 (1)", "10.05.25", "10.05.25 (5)", "10.05.25 (6)", "10.05.26 (3)", "10.05.27 (2)", "10.05.28"],
        artisanat: ["10.05.24", "10.05.25 (4)", "10.05.26 (1)", "10.05.26 (4)", "10.05.27 (1)", "10.05.27", "12.40.01 (2)", "12.40.02 (4)"]
    };
    const photoUrl = (photo) => `assets/${encodeURIComponent(`WhatsApp Image 2026-11-13 at ${photo}.jpeg`)}`;
    let activeGalleryCard = null;

    const renderGalleryImage = (card, index) => {
        const photos = galleryPhotos[card.dataset.gallery];
        const image = card.querySelector("img");
        card.dataset.index = String(index);
        image.src = photoUrl(photos[index]);
        image.alt = `${card.dataset.title}, image ${index + 1} sur ${photos.length}`;
    };

    const renderLightboxImage = () => {
        const photos = galleryPhotos[activeGalleryCard.dataset.gallery];
        const index = Number(activeGalleryCard.dataset.index);
        lightboxImage.src = photoUrl(photos[index]);
        lightboxImage.alt = `${activeGalleryCard.dataset.title}, image ${index + 1} sur ${photos.length}`;
        lightboxCaption.textContent = `${activeGalleryCard.dataset.title} · ${index + 1} / ${photos.length}`;
    };

    const moveGallery = (card, direction) => {
        const photos = galleryPhotos[card.dataset.gallery];
        const index = (Number(card.dataset.index) + direction + photos.length) % photos.length;
        renderGalleryImage(card, index);
        if (activeGalleryCard === card) renderLightboxImage();
    };

    const closeLightbox = () => lightbox.close();

    document.querySelectorAll(".gallery-card").forEach((card) => {
        card.dataset.index = "0";
        card.querySelector(".gallery-open").addEventListener("click", () => {
            activeGalleryCard = card;
            renderLightboxImage();
            lightbox.showModal();
        });
        card.querySelector(".gallery-prev").addEventListener("click", () => moveGallery(card, -1));
        card.querySelector(".gallery-next").addEventListener("click", () => moveGallery(card, 1));
    });

    document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
    document.getElementById("lightbox-prev").addEventListener("click", () => moveGallery(activeGalleryCard, -1));
    document.getElementById("lightbox-next").addEventListener("click", () => moveGallery(activeGalleryCard, 1));
    lightbox.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft") {
            event.preventDefault();
            moveGallery(activeGalleryCard, -1);
        } else if (event.key === "ArrowRight") {
            event.preventDefault();
            moveGallery(activeGalleryCard, 1);
        }
    });
    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) closeLightbox();
    });
    lightbox.addEventListener("close", () => {
        lightboxImage.src = "";
        activeGalleryCard = null;
    });

    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");
    const submitButton = document.getElementById("submit-btn");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        status.textContent = "";
        status.classList.remove("error");
        submitButton.disabled = true;
        submitButton.textContent = "Envoi en cours…";

        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: new FormData(form),
                headers: { Accept: "application/json" }
            });

            if (!response.ok) {
                throw new Error("Le service de contact a refusé le message.");
            }

            status.textContent = "Merci, votre message a bien été envoyé. Nous vous répondrons dès que possible.";
            form.reset();
        } catch (error) {
            status.textContent = "L’envoi n’a pas abouti. Réessayez ou contactez-nous directement par email ou WhatsApp.";
            status.classList.add("error");
        } finally {
            submitButton.disabled = false;
            submitButton.innerHTML = 'Envoyer le message <span aria-hidden="true">↗</span>';
        }
    });

    document.getElementById("year").textContent = String(new Date().getFullYear());
});
