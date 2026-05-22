export function initActivityFilter() {
    const buttons = document.querySelectorAll('.filter-buttons button');
    const items = document.querySelectorAll('.activity-item');

    // 只有在存在這些元素的頁面 (Activities) 才執行
    if (buttons.length === 0 || items.length === 0) return;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // 移除所有按鈕的 active 狀態
            buttons.forEach(btn => {
                btn.classList.remove('active', 'btn-secondary');
                btn.classList.add('btn-outline-secondary');
            });
            
            // 將點擊的按鈕設為 active
            button.classList.remove('btn-outline-secondary');
            button.classList.add('active', 'btn-secondary');

            const filter = button.getAttribute('data-filter');

            // 根據 filter 顯示或隱藏項目
            items.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    // 加入動畫 class
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
