function openWindow(id) {
    document.getElementById(id).classList.add('active');
}
function openWindow(id) {
    document.getElementById(id).classList.add('active');

    const collapse = document.getElementById('navbarToggleExternalContent');
    const bsCollapse = bootstrap.Collapse.getInstance(collapse);
    if (bsCollapse) bsCollapse.hide();
}
function closeWindow(id) {
    const win = document.getElementById(id);
    win.style.transform = 'scale(0)';
    setTimeout(() => {
        win.classList.remove('active');
        win.style.transform = '';
        win.style.left = '50%';
        if (id === 'kontakWindow') {
            win.style.top = window.innerWidth <= 576 ? '45%' : '50%';
        } else {
            win.style.top = window.innerWidth <= 576 ? '60%' : '50%';
        }
        win.style.translate = '-50% -50%';
        win.dataset.dragged = 'false';
    }, 200);
}

function makeDraggable(el) {
    const titlebar = el.querySelector('.window-titlebar');
    let isDragging = false;
    let offsetX, offsetY;

    titlebar.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - el.getBoundingClientRect().left;
        offsetY = e.clientY - el.getBoundingClientRect().top;
        el.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        el.style.translate = 'none';
        el.style.left = e.clientX - offsetX + 'px';
        el.style.top = e.clientY - offsetY + 'px';
        el.dataset.dragged = 'true';
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        el.style.cursor = 'default';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.custom-window').forEach(w => makeDraggable(w));
});
function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
    const date = now.toLocaleDateString('id-ID', { weekday: 'short', day: 'numeric', month: 'short' });
    document.getElementById('clock').textContent = `${date} ${time}`;
}
setInterval(updateClock, 1000);
updateClock();