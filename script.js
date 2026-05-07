// 💖 Floating hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 10) + "px";

    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 300);

// 💬 Chat system
function showMessage() {
    const chat = document.getElementById("chat");
    const choices = document.getElementById("choices");

    chat.classList.remove("hidden");
    chat.innerHTML = "";

    function addMessage(text) {
        const msg = document.createElement("div");
        msg.classList.add("bubble", "me");
        msg.innerText = text;
        chat.appendChild(msg);
        chat.scrollTop = chat.scrollHeight;
    }

    function typing(callback) {
        const t = document.createElement("div");
        t.classList.add("bubble", "typing");
        t.innerText = "Typing...";
        chat.appendChild(t);

        setTimeout(() => {
            t.remove();
            callback();
        }, 1500);
    }

    typing(() => {
        addMessage("Hey...");

        setTimeout(() => {
            typing(() => {
                addMessage("I’ve been wanting to tell you something");

                setTimeout(() => {
                    typing(() => {
                        addMessage("I like you a lot💖");

                        setTimeout(() => {
                            typing(() => {
                                addMessage("I like you a lot and ahhh anytime na kinakausap kita iss napapangiti moko and basata simula ng nakausap kita i never been happy like this bilis ko maattach noh btw i like you because you do  make me happy and your making  my life better just by talking to you and i wanted to know u even more better and ur not just pretty and cute i love ur personality kahit d pa kita gaano kilala and im osososos nervous my ghad and I hope you like me back but if you dont its okay i just wanted to tell you how i feel and i hope we can still be friends no matter what i undqerstand if you dont like me back but i just wanted to be honest with you and tell you how i feel and i hope we can still be friends no matter what. So  what do you think?");
                                choices.classList.remove("hidden");
                            });
                        }, 1000);
                    });
                }, 1000);
            });
        }, 800);
    });
}

// 😂 Moving NO button
const noBtn = document.getElementById("noBtn");

document.addEventListener("mouseover", function(e) {
    if (e.target === noBtn) {
        const x = Math.random() * 200 - 100;
        const y = Math.random() * 200 - 100;

        noBtn.style.position = "relative";
        noBtn.style.left = x + "px";
        noBtn.style.top = y + "px";
    }
});

// Responses
function yes() {
    document.getElementById("response").innerText =
        "You just made me the happiest person alive I WILL MAKE YOU THE HAPPIEST GIRL AND I WILL TREAT YOU BETTER THAN ANYONE AND I WILL CHERISH YOU AND MAKE YOU SMILE ALWAYS 💖🥺";
}

function no() {
    document.getElementById("response").innerText =
        "You caught me 😭 but I still like you!";
}