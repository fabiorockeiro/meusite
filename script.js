function showSection(sectionId) {
    var sections = document.getElementsByClassName('content-section');
    var tabs = document.getElementsByClassName('tab');
    
    for (var i = 0; i < sections.length; i++) {
        sections[i].classList.remove('active');
        tabs[i].classList.remove('active');
    }
    
    document.getElementById(sectionId).classList.add('active');
    document.querySelector(`.tab[onclick="showSection('${sectionId}')"]`).classList.add('active');
}

window.onscroll = function() {
    showFooter();
};

function showFooter() {
    var footer = document.getElementById('page-footer');
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // Verifica se o usuário rolou até o final da página
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // Mostra o footer se o usuário estiver no final da página
        footer.style.display = "block";
    } else {
        // Esconde o footer se o usuário não estiver no final da página
        footer.style.display = "none";
    }
}
document.addEventListener("DOMContentLoaded", function() {
    var slideIndex = 0;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("gallery-img");
        if (n >= slides.length) { slideIndex = 0; }
        if (n < 0) { slideIndex = slides.length - 1; }

        for (i = 0; i < slides.length; i++) {
            slides[i].classList.remove("left", "center", "right");
            slides[i].style.display = "none";
        }

        if (slides.length > 0) {
            slides[(slideIndex + slides.length - 1) % slides.length].classList.add("left");
            slides[slideIndex].classList.add("center");
            slides[(slideIndex + 1) % slides.length].classList.add("right");

            slides[(slideIndex + slides.length - 1) % slides.length].style.display = "block";
            slides[slideIndex].style.display = "block";
            slides[(slideIndex + 1) % slides.length].style.display = "block";
        }
    }

    document.getElementById("prevBtn").addEventListener("click", function() { plusSlides(-1) });
    document.getElementById("nextBtn").addEventListener("click", function() { plusSlides(1) });

    var galleryImages = document.querySelectorAll('.gallery-img');
    galleryImages.forEach(function(image) {
        image.addEventListener('click', function() {
            window.open(this.src, '_blank');
        });
    });
}); 


document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('matrix-canvas');
    const context = canvas.getContext('2d');

    // Definindo a largura e altura do canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Katakana, Latin and Numerals characters
    const katakana = 'アカサタナハマヤラワガザダバパイキシチニヒミリギジヂビピウクスツヌフムユルグズヅブプエケセテネヘメレゲゼデベペオコソトノホモヨロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';

    // Concatenando todos os caracteres possíveis
    const alphabet = katakana + latin + nums;

    // Definindo o tamanho da fonte e o número de colunas
    const fontSize = 24;  // Aumentando o tamanho da fonte
    const columns = Math.floor(canvas.width / (fontSize * 1.5));  // Ajustando o espaçamento entre colunas

    // Array para armazenar a posição dos "rain drops"
    const rainDrops = Array(columns).fill(1);

    // Função para desenhar o efeito Matrix
    const draw = () => {
        context.fillStyle = 'rgba(0, 0, 0, 0.05)';
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.fillStyle = '#0F0';
        context.font = fontSize + 'px monospace';

        for (let i = 0; i < rainDrops.length; i++) {
            const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            context.fillText(text, i * fontSize * 1.5, rainDrops[i] * fontSize);  // Ajustando o espaçamento entre colunas

            if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                rainDrops[i] = 0;
            }
            rainDrops[i]++;
        }
    };

    // Ajustar o tamanho do canvas quando a janela for redimensionada
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const columns = Math.floor(canvas.width / (fontSize * 1.5));
        rainDrops.length = columns;
        for (let i = 0; i < columns; i++) {
            rainDrops[i] = 1;
        }
    });

    setInterval(draw, 30);
});

document.addEventListener("DOMContentLoaded", function() {
    const audio = document.createElement('audio');
    audio.src = 'audio/pertodopai.mp3';
    const playPauseBtn = document.getElementById('playPauseBtn');
    const progressBar = document.getElementById('progressBar');
    const progress = document.getElementById('progress');
    const currentTime = document.getElementById('currentTime');

    playPauseBtn.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            audio.pause();
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    });

    audio.addEventListener('timeupdate', function() {
        const progressPercent = (audio.currentTime / audio.duration) * 100;
        progress.style.width = progressPercent + '%';
        currentTime.textContent = formatTime(audio.currentTime);
    });

    audio.addEventListener('loadedmetadata', function() {
        progressBar.addEventListener('click', function(e) {
            const width = progressBar.clientWidth;
            const clickX = e.offsetX;
            const duration = audio.duration;

            audio.currentTime = (clickX / width) * duration;
        });
    });

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }
});

document.addEventListener("DOMContentLoaded", function() {
    function initializeGallery(slideClass, prevBtnId, nextBtnId) {
        var slideIndex = 0;
        var slides = document.querySelectorAll(slideClass);

        showSlides(slideIndex);

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function showSlides(n) {
            if (n >= slides.length) { slideIndex = 0; }
            if (n < 0) { slideIndex = slides.length - 1; }

            for (var i = 0; i < slides.length; i++) {
                slides[i].classList.remove("left", "center", "right");
                slides[i].style.display = "none";
            }

            if (slides.length > 0) {
                slides[(slideIndex + slides.length - 1) % slides.length].classList.add("left");
                slides[slideIndex].classList.add("center");
                slides[(slideIndex + 1) % slides.length].classList.add("right");

                slides[(slideIndex + slides.length - 1) % slides.length].style.display = "block";
                slides[slideIndex].style.display = "block";
                slides[(slideIndex + 1) % slides.length].style.display = "block";
            }
        }

        document.getElementById(prevBtnId).addEventListener("click", function() { plusSlides(-1); });
        document.getElementById(nextBtnId).addEventListener("click", function() { plusSlides(1); });
    }

    // Inicializa a galeria DESIGNER
    initializeGallery('.gallery-img-designer', 'prevBtnDesigner', 'nextBtnDesigner');
    
    var galleryImagesDesigner = document.querySelectorAll('.gallery-img-designer');
    galleryImagesDesigner.forEach(function(image) {
        image.addEventListener('click', function() {
            window.open(this.src, '_blank');
        });
    });
});



