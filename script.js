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

    // ✨ Typing animation (letter by letter)
    function addMessage(text, speed = 30, callback = null) {
        const msg = document.createElement("div");
        msg.classList.add("bubble", "me");
        chat.appendChild(msg);

        let i = 0;

        function type() {
            if (i < text.length) {
                msg.innerText += text.charAt(i);
                i++;
                chat.scrollTop = chat.scrollHeight;
                setTimeout(type, speed);
            } else {
                if (callback) callback();
            }
        }

        type();
    }

    // 💭 "Typing..." with animated dots
    function typing(callback) {
        const t = document.createElement("div");
        t.classList.add("bubble", "typing");
        t.innerText = "Typing";
        chat.appendChild(t);

        let dots = 0;
        const interval = setInterval(() => {
            dots = (dots + 1) % 4;
            t.innerText = "Typing" + ".".repeat(dots);
        }, 300);

        setTimeout(() => {
            clearInterval(interval);
            t.remove();
            callback();
        }, 1500);
    }

    // 💌 Message flow
    typing(() => {
        addMessage("Hey...", 50, () => {

            setTimeout(() => {
                typing(() => {
                    addMessage("I’ve been wanting to tell you something", 40, () => {

                        setTimeout(() => {
                            typing(() => {
                                addMessage("I like you a lot 💖", 40, () => {

                                    setTimeout(() => {
                                        typing(() => {
                                            addMessage(
`I like you a lot and ahhh anytime na kinakausap kita napapangiti moko 😭 
kahit hindi tayo gaano naguusap hehe...

Simula nung nakausap kita, I’ve never been this happy.
Ang bilis ko ma-attach noh 😭

I like you because you make me happy,
and you make my life better just by talking to you.

I want to know you more...
and you're not just pretty and cute,
I love your personality 💖

Kinakabahan ako sobra 😭
but I hope you like me back...

If not, okay lang 🥺
I just wanted to tell you how I feel.

So... what do you think?`,
                                            20,
                                            () => {
                                                choices.classList.remove("hidden");
                                            }
                                            );
                                        });
                                    }, 1000);

                                });
                            });
                        }, 1000);

                    });
                });
            }, 800);

        });
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

// 💖 Responses
function yes() {
    document.getElementById("response").innerText =
        "You just made me the happiest person alive 😭💖 I will treat you right and always make you smile!";
}

function no() {
    document.getElementById("response").innerText =
        "You caught me 😭 but I still like you!";
}
