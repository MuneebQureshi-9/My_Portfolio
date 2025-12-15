/**
 * Interactive Modules for Portfolio (Expanded Edition)
 * Focus: Spotlight Effect & Interaction
 */

// --- Spotlight / Hover Effect ---
function initSpotlight(selector) {
    const cards = document.querySelectorAll(selector);

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}

// Export for usage in main script
window.initSpotlight = initSpotlight;
