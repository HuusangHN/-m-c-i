const createSnowflake = () => {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');

    // Thiết lập vị trí ngẫu nhiên
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.width = Math.random() * 10 + 5 + 'px'; // Kích thước ngẫu nhiên
    snowflake.style.height = snowflake.style.width; // Đảm bảo hình tròn

    document.body.appendChild(snowflake);

    // Animation rơi xuống
    const fallDuration = Math.random() * 2 + 1; // Thời gian rơi từ 2 đến 5 giây
    snowflake.style.transition = `transform ${fallDuration}s linear`;
    snowflake.style.transform = `translateY(${window.innerHeight + 10}px)`; // Rơi xuống dưới

    // Xóa bông tuyết sau khi rơi
    setTimeout(() => {
        snowflake.remove();
    }, fallDuration * 1000);
};

// Tạo bông tuyết mỗi 200ms
setInterval(createSnowflake, 200);

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const coupleInfo = document.querySelector('.couple-info');
    const background = coupleInfo.querySelector('.background');
    const backgrounds = ['background1', 'background2', 'background3'];
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % backgrounds.length;
        background.className = `background ${backgrounds[currentIndex]}`;
    }, 5000);

    let mouseX = 0, mouseY = 0;
    coupleInfo.addEventListener('mousemove', (e) => {
        const { width, height } = coupleInfo.getBoundingClientRect();
        mouseX = (e.clientX - coupleInfo.offsetLeft) / width;
        mouseY = (e.clientY - coupleInfo.offsetTop) / height;
    });

    function animate() {
        const x = (mouseX - 0.5) * 30;
        const y = (mouseY - 0.5) * 30;
        background.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        requestAnimationFrame(animate);
    }

    animate();

    coupleInfo.addEventListener('mouseleave', () => {
        background.style.transform = 'translate3d(0, 0, 0)';
    });
});

const countdownDate = new Date("December 12, 2024 00:00:00").getTime();

    const x = setInterval(function () {
        const now = new Date().getTime();
        const distance = countdownDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);


        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;


        if (distance < 0) {
            clearInterval(x);
            document.getElementById("days").innerHTML = "0";
            document.getElementById("hours").innerHTML = "0";
            document.getElementById("minutes").innerHTML = "0";
            document.getElementById("seconds").innerHTML = "0";
        }
    }, 1000);

    function openPopup() {
        document.getElementById('popup').style.display = 'flex';
    }
    
    function closePopup() {
        document.getElementById('popup').style.display = 'none';
    }

    document.addEventListener("DOMContentLoaded", function() {
        const eventContainers = document.querySelectorAll('.event-container');

        function checkVisibility() {
            const viewportHeight = window.innerHeight;

            eventContainers.forEach(container => {
                const rect = container.getBoundingClientRect();
                if (rect.top < viewportHeight && rect.bottom > 0) {
                    container.classList.add('visible');
                }
            });
        }

        window.addEventListener('scroll', checkVisibility);
        checkVisibility();
    });

    document.addEventListener("DOMContentLoaded", function() {
        const gallery = document.querySelector('.gallery');

        function checkVisibility() {
            const rect = gallery.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            if (rect.top < viewportHeight && rect.bottom > 0) {
                gallery.classList.add('visible');
            }
        }

        window.addEventListener('scroll', checkVisibility);
        checkVisibility();
    });

    document.addEventListener("DOMContentLoaded", function() {
        const gallery = document.querySelector('.gallery');
        const galleryImages = document.querySelectorAll('.gallery img');
        const modal = document.getElementById('imageModal');
        const modalImage = document.getElementById('modalImage');
        const caption = document.getElementById('caption');
        const closeModal = document.getElementById('closeModal');

        function checkVisibility() {
            const rect = gallery.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            if (rect.top < viewportHeight && rect.bottom > 0) {
                gallery.classList.add('visible');
            }
        }


        galleryImages.forEach(img => {
            img.addEventListener('click', function() {
                modal.style.display = "block";
                modalImage.src = this.src;
                caption.innerHTML = this.alt;
            });
        });

        closeModal.addEventListener('click', function() {
            modal.style.display = "none";
        });

        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });

        window.addEventListener('scroll', checkVisibility);
        checkVisibility();
    });

    const saveMessage = (name, email, message) => {
        const messages = JSON.parse(localStorage.getItem('messages')) || [];
        messages.push({ name, email, message });
        localStorage.setItem('messages', JSON.stringify(messages));
    };

    // Hiển thị lời chúc đã lưu khi tải trang
    const displaySavedMessages = () => {
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    const messageOutput = document.getElementById('messageOutput');
    
    messages.forEach(msg => {
        messageOutput.innerHTML += `<strong>${msg.name}</strong> (${msg.email}):<br>${msg.message}<br><hr>`;
    });
};

    // Gọi hàm khi tải trang
    document.addEventListener('DOMContentLoaded', displaySavedMessages);

    document.getElementById('sendButton').addEventListener('click', function() {
        const nameInput = document.getElementById('nameInput').value;
        const emailInput = document.getElementById('emailInput').value;
        const messageInput = document.getElementById('messageInput').value;
    
        // Kiểm tra điều kiện email và message
        const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        if (nameInput.trim() === "" || !emailPattern.test(emailInput) || messageInput.length < 6) {
            alert("Vui lòng nhập đầy đủ thông tin: email phải là dạng abc@gmail.com và lời chúc phải trên 6 ký tự.");
            return;
        }

        const messageOutput = document.getElementById('messageOutput');
        messageOutput.innerHTML = `<strong>${nameInput}</strong> (${emailInput}):<br>${messageInput}`;
        
        // Lưu lời chúc vào Local Storage
        saveMessage(nameInput, emailInput, messageInput);
        
        // Xóa nội dung nhập sau khi gửi
        document.getElementById('nameInput').value = '';
        document.getElementById('emailInput').value = '';
        document.getElementById('messageInput').value = '';
    });
    
    // Hiện popup gợi ý
    document.getElementById('showSuggestions').addEventListener('click', function(event) {
        const suggestionPopup = document.getElementById('suggestionPopup');
        suggestionPopup.style.display = suggestionPopup.style.display === 'none' ? 'block' : 'none';
        suggestionPopup.style.position = 'absolute';
        suggestionPopup.style.top = event.target.getBoundingClientRect().bottom + window.scrollY + 'px';
        suggestionPopup.style.left = event.target.getBoundingClientRect().left + 'px';
    });

    // Hiện/ẩn danh sách emoji
    document.getElementById('addEmoji').addEventListener('click', function(event) {
        const emojiPopup = document.getElementById('emojiPopup');
        emojiPopup.style.display = emojiPopup.style.display === 'none' ? 'block' : 'none';
        emojiPopup.style.position = 'absolute';
        emojiPopup.style.top = event.target.getBoundingClientRect().bottom + window.scrollY + 'px';
        mojiPopup.style.left = event.target.getBoundingClientRect().left + 'px';
});
    
    // Chọn lời chúc mẫu
document.querySelectorAll('.suggestion-item').forEach(item => {
    item.addEventListener('click', function() {
        const messageInput = document.getElementById('messageInput');
        messageInput.value = this.dataset.message; // Chèn lời chúc mẫu
        document.getElementById('suggestionPopup').style.display = 'none'; // Ẩn danh sách sau khi chọn
    });
});

// Chèn emoji vào messageInput khi người dùng chọn
document.querySelectorAll('.emoji').forEach(item => {
    item.addEventListener('click', function() {
        const messageInput = document.getElementById('messageInput');
        messageInput.value += this.dataset.emoji; // Chèn emoji
        document.getElementById('emojiPopup').style.display = 'none'; // Ẩn danh sách emoji sau khi chọn
    });
});

// Ẩn popup khi nhấn ra ngoài
document.addEventListener('click', function(event) {
    const suggestionPopup = document.getElementById('suggestionPopup');
    const emojiPopup = document.getElementById('emojiPopup');
    
    if (!event.target.closest('.icon') && !event.target.closest('.popup')) {
        suggestionPopup.style.display = 'none';
        emojiPopup.style.display = 'none';
    }
});

    
        
        
        
