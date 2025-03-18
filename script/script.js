window.onscroll = () => {
    document.getElementById('navbar').classList.toggle('scroll', window.scrollY > 100);
}
let count = 0;
function menu() {
    count = count + 1;
    if (count == 1) {
        document.querySelector(`.roll`).style = "right:0px; transition: .5s;";
        document.querySelector(`.rol`).style = "right:0px; transition: 1s;";
    }
    if (count == 2) {
        document.querySelector(`.roll`).style = "right:-400px; transition: 1s;";
        document.querySelector(`.rol`).style = "right:-400px; transition: .5s; ";
        count = 0;
    }
}


// SCRIPT FOR CHANGE TEXT ANIMATION WORD BY WORD 

let words = document.querySelectorAll(".word");
words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});
let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = " letter in ";
        }, 340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;

};
changeText();
setInterval(changeText, 3000);

// my text animation //
/*
let my_name = document.querySelector(".home_name");
my_name.forEach((word) => {
    let each_letters = word.textContent.split("");
    word.textContent = "";
    each_letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "name";
        word.append(span);
    });
});*/
/*
let my_name = document.querySelector(".home_name");
my_name.forEach((word) => {
    let each_letters = word.textContent.split("");
    word.textContent = "";
    each_letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "name";
        word.append(span);
    });
});*/
function add_name() {
    let my_name = document.querySelector(".home_name");
    let each_letters = my_name.textContent.split("");
    my_name.textContent = "";
    each_letters.forEach((letter, index) => {
        setTimeout(() => {
            let span = document.createElement("span");
            span.textContent = letter;
            span.className = "name";
            // span.style = `--j: ${(index + 1)}s;`;
            my_name.append(span);
        }, (index + 1) * 300); 
    });
    setTimeout(add_name, each_letters.length * 300 + 1000);
}
add_name();


const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".nav_link");

window.addEventListener("scroll", () => {
  let currentSection = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute("id");
    }
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {

      link.classList.add("active");

    }
  });
});

// 
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var phone = document.getElementById('number').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('sub').value;
    var message = document.getElementById('message').value;

    var gmailLink = 'https://mail.google.com/mail/?view=cm&fs=1&to=anki02062005email@gmail.com&su=' + encodeURIComponent(subject) +
                    '&body=' + encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\nPhone no. :' + phone + '\nMessage: ' + message);

    window.open(gmailLink, '_blank');
});
