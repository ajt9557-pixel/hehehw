// 💖 Hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 10) + "px";

    document.querySelector(".hearts")?.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 300);


// 💬 Typing system
function typingEffect(chat, text, speed = 35, callback) {
    const typing = document.createElement("div");
    typing.className = "bubble typing";
    typing.innerText = "Typing...";

    chat.appendChild(typing);
    chat.scrollTop = chat.scrollHeight;

    setTimeout(() => {
        typing.remove();

        const msg = document.createElement("div");
        msg.className = "bubble me";
        chat.appendChild(msg);

        let i = 0;

        function type() {
            if (i < text.length) {
                msg.innerText += text[i++];
                chat.scrollTop = chat.scrollHeight;
                setTimeout(type, speed);
            } else if (callback) callback();
        }

        type();
    }, 1200);
}


// 💌 Main chat
function showMessage() {
    const chat = document.getElementById("chat");
    const choices = document.getElementById("choices");

    chat.classList.remove("hidden");
    chat.innerHTML = "";

    typingEffect(chat, "Hey...", 50, () => {
        typingEffect(chat, " so may gusto lng ako na sabihin hehehe ", 40, () => {
            typingEffect(chat, "I like you 💖", 40, () => {
                typingEffect(chat,
                    "I like you a lot and I just want to be honest with you...Simula nung nakausap kita, sobrang saya.Ang bilis ko ma-attach 😭You make me happy just by talking to me."
                    () => choices.classList.remove("hidden")
                );
            });
        });
    });
}


// 💀 Moving NO button
window.addEventListener("DOMContentLoaded", () => {
    const noBtn = document.getElementById("noBtn");

    document.addEventListener("mousemove", (e) => {
        if (!noBtn) return;

        const rect = noBtn.getBoundingClientRect();
        const dx = e.clientX - rect.left;
        const dy = e.clientY - rect.top;

        if (Math.sqrt(dx * dx + dy * dy) < 80) {
            noBtn.style.position = "relative";
            noBtn.style.transform = `translate(${Math.random()*200-100}px, ${Math.random()*200-100}px)`;
        }
    });
});


// 💖 Buttons
function yes() {
    document.getElementById("response").innerText =
        "You just made me the happiest person alive I WILL MAKE YOU THE HAPPIEST GIRL AND I WILL TREAT YOU BETTER THAN ANYONE AND I WILL CHERISH YOU AND MAKE YOU SMILE ALWAYS💖";
}

function no() {
    document.getElementById("response").innerText =
        "You caught me 😭 but I still like you!";
}
