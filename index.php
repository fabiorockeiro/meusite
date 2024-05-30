<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fábio Rockeiro - Portfólio</title>
    <link rel="icon" type="image/png" href="images/favicon.png">

    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>

<body>
<canvas id="matrix-canvas"></canvas>

<section id="intro">
    <div class="intro-content">
        <img src="images/profile.png" alt="Fábio Rockeiro" class="profile-pic">
        <div class="intro-text">
            <h1>Fábio Rockeiro</h1>
            <hr>
            <h3>Fábio da Cunha Malafaia</h3>
        </div>
    </div>
    <div class="description">
                <p>💻 Desenvolvedor Fullstack</p>
                <p>🎸 Músico: Guitarrista da banda 
                    <a href="https://pertodopai.com.br/" target="_blank">
                        <img src="images/pertodopai.png" alt="Perto do Pai">
                    </a>
                </p>
                <p>🎨 Designer: Canva e I.A</p>
            </div>
</section>



    <section id="menu">
        <div class="tab dev-tab active" onclick="showSection('dev')">DEV</div>
        <div class="tab music-tab" onclick="showSection('music')">MUSIC</div>
        <div class="tab designer-tab" onclick="showSection('designer')">DESIGNER</div>
        <div class="tab contact-tab" onclick="showSection('contact')">CONTATO</div>
    </section>
    <section id="dev" class="content-section active">
    <div>
        <h2>DEV Fullstack</h2>
    </div>
    <div class="dev-info">

        <div class="skills-and-gallery">
            <div class="dev-skills">
                <h3>Tecnólogo em Análise e Desenvolvimento de Sistemas</h3>
                <p>Atualmente, presto serviços na SIX TECNOLOGIA, fazendo manutenção em sistemas WEB e aplicações Android! Estou capacitado em várias linguagens e tecnologias, incluindo PHP, Kotlin, HTML, CSS, JavaScript, MySQL, IONIC e outras.</p>
                <img src="images/logos1.png" alt="Logo">
                <img src="images/logos2.png" alt="Logo">
            </div>
            
            <div class="project-gallery">
                <div id="prevBtn" class="nav-btn">❮</div>
                <img src="images/sistema1.png" alt="Projeto Imagem" class="gallery-img">
                <img src="images/sistema2.png" alt="Projeto Imagem" class="gallery-img active">
                <img src="images/sistema3.png" alt="Projeto Imagem" class="gallery-img">
                <img src="images/sistema4.png" alt="Projeto Imagem" class="gallery-img">
                <img src="images/sistema5.png" alt="Projeto Imagem" class="gallery-img">
                <div id="nextBtn" class="nav-btn">❯</div>
            </div>
        </div>
    </div>
</section>





<section id="music" class="content-section">
    <h2>Músico</h2>
    <div class="music-skill">
    <div class="instagram-divs">

    <img src="images/MUSIC.jpg" alt="Música" class="zoomable-image">
        <div id="instagram-header">
            <img src="images/instagram_logo.webp" alt="Instagram Logo" class="instagram-logo">
            <span class="instagram-username">@brincarderock</span>
            <img src="images/verified.png" alt="Verified Icon" class="verified-icon">
            <a href="https://www.instagram.com/brincarderock/" target="_blank" class="follow-button">Follow</a>

        </div>
        <div id="instagram-feed">
            <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
            <iframe src="//lightwidget.com/widgets/51f1e1d854db5a288a069a2aa4f38c42.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width:100%;border:0;overflow:hidden;"></iframe>
        </div>
    </div>
    <div class="music-info">
                <h3>EXPERIÊNCIA</h3>
                <p>Além de guitarrista de uma banda de POP ROCK GOSPEL, já lecionei aulas de Violão, Guitarra e Percepção musical desde crianças à adultos! Também toquei em casamentos e gravei linhas de guitarra profissional em STUDIOS. Confira as músicas da nossa banda!</p>
                <!-- Custom Audio Player -->
                <div class="audio-player">
                <a href="https://onerpm.link/401375019127" target="_blank">
    <img src="images/pertodopai2.jpeg" alt="Perto do Pai" class="zoomable-image">
</a>
    <button id="playPauseBtn" class="playPauseBtn"><i class="fas fa-play"></i></button>
    <div class="progress-bar" id="progressBar">
    <h3>Na Presença do Senhor - PERTO DO PAI</h3>

        <div id="progress"></div>
    </div>
    <div class="time" id="currentTime">0:00</div>
</div>

            </div>
    </div>
</section>


<section id="designer" class="content-section">
    <div>
        <h2>DESIGNER</h2>
    </div>
    <div class="designer-info">

        <div class="skills-and-gallery">
        <div class="designer-skills">
                <p>Produzo conteúdo visual para redes sociais e já fiz freelance para igrejas, restaurantes e MMORPGs, utilizando diversas ferramentas, incluindo CANVAS e recursos de Inteligência Artificial.</p>                
            </div>
            <div class="project-gallery-designer">
            <div id="prevBtnDesigner" class="nav-btn-designer">❮</div>
            <img src="images/designer.png" alt="Projeto Imagem" class="gallery-img-designer">
            <img src="images/designer2.png" alt="Projeto Imagem" class="gallery-img-designer active">
            <img src="images/designer3.jpg" alt="Projeto Imagem" class="gallery-img-designer">
            <img src="images/designer4.png" alt="Projeto Imagem" class="gallery-img-designer">
            <img src="images/designer6.png" alt="Projeto Imagem" class="gallery-img-designer">
            <img src="images/designer7.png" alt="Projeto Imagem" class="gallery-img-designer">
            <img src="images/designer8.png" alt="Projeto Imagem" class="gallery-img-designer">
            <img src="images/designer9.png" alt="Projeto Imagem" class="gallery-img-designer">
            <img src="images/designer10.jpg" alt="Projeto Imagem" class="gallery-img-designer">
            <img src="images/designer11.png" alt="Projeto Imagem" class="gallery-img-designer">
            <div id="nextBtnDesigner" class="nav-btn-designer">❯</div>
        </div>
        <div class="designer-skills" >        
            <img src="images/logos3.png" alt="Logo">
        </div>
        </div>
    </div>
</section>

<section id="contact" class="content-section">
    <h2>Contato</h2>
    <p>Email: contato@fabiorockeiro.com.br</p>
    <p>Telefone: (65)98407-7327</p>
    <a href="https://wa.me/message/WETS6SMJANK6A1" target="_blank"><img src="images/qrcode.jpeg" alt="QR Code WhatsApp" class="img-whatsapp"></a>
</section>


    <script src="script.js"></script>
    <footer id="page-footer" class="footer">© 2024 Fábio Rockeiro - Todos os direitos reservados.</footer>



</body>

</html>