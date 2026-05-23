export function initActivityFilter() {
    const buttons = document.querySelectorAll('.filter-buttons button');
    const items = document.querySelectorAll('.activity-item');

    // Only execute if these elements exist on the page
    if (buttons.length === 0 || items.length === 0) return;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active state from all buttons
            buttons.forEach(btn => {
                btn.classList.remove('active', 'btn-secondary');
                btn.classList.add('btn-outline-secondary');
            });
            
            // Set clicked button to active state
            button.classList.remove('btn-outline-secondary');
            button.classList.add('active', 'btn-secondary');

            const filter = button.getAttribute('data-filter');

            // Show or hide items based on the selected filter
            items.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    // Add animation class
                    item.classList.remove('animate-fade-in');
                    void item.offsetWidth; // Trigger reflow
                    item.classList.add('animate-fade-in');
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}
