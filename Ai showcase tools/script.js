document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const menu = document.getElementById("nav-menu");

    menuIcon.addEventListener("click", function() {
        menu.classList.toggle("active");
    });

    document.addEventListener("click", function(event) {
        if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
            menu.classList.remove("active");
        }
    });
});

function closeSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.querySelectorAll('input[type="text"], textarea').forEach(input => input.value = '');
    section.querySelectorAll('div[id$="-result"]').forEach(div => div.innerHTML = '');
    
}

function generateImage() {
    const text = document.getElementById("image-text").value.trim().toLowerCase();
    let result;
    switch (text) {
        case "cat":
            result = `<img src="images/cat.avif" width="200px" height="300px" alt="Cat Image">`;
            break;
        case "flower":
            result = `<img src="images/flower.jpg" width="200px" height="300px" alt="Flower Image">`;
            break;
        case "nature":
            result = `<img src="images/nature.webp" width="200px" height="300px" alt="Nature Image">`;
            break;
        default:
            result = `Image generated for: "${text}"`;
    }
    document.getElementById("image-result").innerHTML = result;
}

function generateIcon() {
    const text = document.getElementById("icon-text").value.trim().toLowerCase();
    let result;
    switch (text) {
        case "instagram":
            result = `<i class="fa-brands fa-instagram"></i> Instagram Icon`;
            break;
        case "thumbs-up":
            result = `<i class="fa-solid fa-thumbs-up"></i> Thumbs up Icon`;
            break;
        case "home":
            result = `<i class="fa-solid fa-house"></i> Home Icon`;
            break;
        default:
            result = `Icon generated for: "${text}"`;
    }
    document.getElementById("icon-result").innerHTML = result;
}

function generatePDF() {
    const content = document.getElementById("pdf-content").value.trim().toLowerCase();
    let result;
    const pdfMap = {
        "user manual": "images/usermanual.pdf",
        "company brochure": "images/companybrochure.pdf",
        "financial report": "images/financialreport.pdf"
    };
    if (pdfMap[content]) {
        result = `<embed src="${pdfMap[content]}" type="application/pdf" width="100%" height="500px">`;
    } else if (content.length > 0) {
        result = `<p>No predefined PDF found for: "${content}".</p>`;
    } else {
        result = `<p>Please enter content to fetch the PDF.</p>`;
    }
    document.getElementById("pdf-result").innerHTML = result;
}

function generateVideo() {
    const text = document.getElementById("video-text").value.trim().toLowerCase();
    let result;
    switch (text) {
        case "sky":
            result = `<video controls width="100%" height="500px" src="images/sky.mp4"></video>`;
            break;
        case "book":
            result = `<video controls width="100%" height="500px" src="images/book.mp4"></video>`;
            break;
        case "ocean":
            result = `<video controls width="100%" height="500px" src="images/ocean.mp4"></video>`;
            break;
        default:
            result = `Video generated with description: "${text}"`;
    }
    document.getElementById("video-result").innerHTML = result;
}

function generateBackground() {
    const text = document.getElementById("background-text").value.trim().toLowerCase();
    let result;
    switch (text) {
        case "abstract":
            result = `<div style="background: url('images/abstract.avif') no-repeat center center; background-size: cover; width: 100%; height: 300px;"></div>`;
            break;
        case "landscape":
            result = `<div style="background: url('images/landscape.avif') no-repeat center center; background-size: cover; width: 100%; height: 300px;"></div>`;
            break;
        case "city":
            result = `<div style="background: url('images/city.avif') no-repeat center center; background-size: cover; width: 100%; height: 300px;"></div>`;
            break;
        default:
            result = `Background generated for: "${text}"`;
    }
    document.getElementById("background-result").innerHTML = result;
}

const imagesWithBg = {
    "flower.jpg": "images/flowerremove.jpg",
    "watch.jpg": "images/watchremove.jpg",
    "shoe.jpg": "images/shoeremove.jpg"
};

function processImage() {
    const file = document.getElementById("background-removal-file").files[0];
    let result = '';
    if (file) {
        const fileName = file.name;
        if (imagesWithBg[fileName]) {
            const fileURL = URL.createObjectURL(file);
            const bgRemovedURL = imagesWithBg[fileName];
            result += `<p>Uploaded image with background: <img src="${fileURL}" alt="Uploaded Image" style="max-width: 100%; height: auto;"></p>`;
            result += `<p>Image with background removed: <img src="${bgRemovedURL}" alt="Image with Background Removed" style="max-width: 100%; height: auto;"></p>`;
        } else {
            result = `<p>No background removed image available for this file.</p>`;
        }
    } else {
        result = `<p>No image uploaded.</p>`;
    }
    document.getElementById("background-removal-result").innerHTML = result;
}

function generateNews() {
    const content = document.getElementById("news-content").value.trim().toLowerCase();
    let result;
    const newsTopics = {
        "breaking news": `
            <h3>Breaking News:</h3>
            <p>Today's headline features a major event that has shaken the world. Reports are coming in about a significant incident affecting global markets and political landscapes. Stay tuned for continuous updates as more details emerge about this unprecedented event.</p>
            <p>Authorities are urging the public to stay informed and follow reliable news sources for accurate information. The situation is evolving rapidly, and experts are analyzing its potential impact on various sectors.</p>
        `,
        "sports update": `
            <h3>Sports Update:</h3>
            <p>In a thrilling conclusion to the local sports season, the home team has emerged victorious in the championship match. The game was a showcase of incredible skill and teamwork, culminating in a dramatic final moments victory.</p>
            <p>Fans are celebrating the win, and the team is being hailed as champions. The match featured standout performances from key players, and the victory marks a significant achievement for the team and its supporters.</p>
        `,
        "technology news": `
            <h3>Technology News:</h3>
            <p>Exciting developments in the tech world as a new gadget with revolutionary features is released. This latest innovation promises to transform user experiences with cutting-edge technology and advanced functionalities.</p>
            <p>The new device includes features such as enhanced connectivity, improved performance, and a sleek design. Industry experts are praising its potential to set new standards in the tech industry, and early reviews are already highlighting its impressive capabilities.</p>
        `,
        "entertainment news": `
            <h3>Entertainment News:</h3>
            <p>The entertainment industry is buzzing with the release of a highly anticipated blockbuster movie. The film, which has been generating significant buzz, hit theaters this weekend and has already received glowing reviews from critics and audiences alike.</p>
            <p>Featuring a star-studded cast and a captivating storyline, the movie is expected to be a major success at the box office. Fans are flocking to theaters to experience the excitement and drama of this latest cinematic offering.</p>
        `,
        "world news": `
            <h3>World News:</h3>
            <p>Global leaders have convened for an important summit to address pressing international issues. The discussions focus on critical topics such as climate change, economic stability, and geopolitical conflicts.</p>
            <p>Delegates from various countries are collaborating to find solutions and strategies to tackle these global challenges. The outcomes of the summit could have far-reaching implications for international relations and global policy.</p>
        `
    };

    if (newsTopics[content]) {
        result = newsTopics[content];
    } else {
        result = `<p>No predefined news found for: "${content}". Please try another topic.</p>`;
    }

    document.getElementById("news-result").innerHTML = result;
}
