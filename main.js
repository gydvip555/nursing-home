// Search functionality
function search() {
    const query = document.getElementById('searchInput').value.trim();
    if (query) {
        alert('搜索功能开发中，敬请期待！\n您可以先浏览已收录的省份：\n- 辽宁省');
    }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    console.log('狗熊岭养老院在线目录已加载');
});
