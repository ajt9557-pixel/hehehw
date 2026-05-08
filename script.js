window.addEventListener("DOMContentLoaded", () => {

    // 💖 Floating hearts
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerText = "💖";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (Math.random() * 20 + 10) + "px";

        const container = document.querySelector(".hearts");
        if (container) container.appendChild(heart);

        setTimeout(() => heart.remove(), 5000);
    }

    setInterval(createHeart, 300);


    // 💬 Chat system
    function showMessage() {
        const chat = document.getElementById("chat");
        const choices = document.getElementById("choices");

        if (!chat || !choices) return;

        chat.classList.remove("hidden");
        chat.innerHTML = "";

        function addMessage(text, speed = 30, callback) {
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
                } else if (callback) {
                    callback();
                }
            }

            type();
        }

        function typing(callback) {
            const t = document.createElement("div");
            t.classList.add("bubble", "typing");
            t.innerText = "Typing...";
            chat.appendChild(t);

            setTimeout(() => {
                t.remove();
                callback();
            }, 1200);
        }

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
`I like you a lot and I just want to be honest with you 💖

Simula nung nakausap kita, sobrang saya ko na.
Ang bilis ko ma-attach 😭

You make me happy just by talking to you.

I hope you feel the same... 🥺

So... what do you think?`,
                                                20, () => {
                                                    choices.classList.remove("hidden");
                                                });
                                            });
                                        }, 800);

                                    });
                                });
                            }, 800);

                        });
                    });
                }, 800);

            });
        });
    }

    // expose function globally for HTML button
    window.showMessage = showMessage;


    // 💀 Moving NO button (safe version)
    const noBtn = document.getElementById("noBtn");

    document.addEventListener("mousemove", function(e) {
        if (!noBtn) return;

        const rect = noBtn.getBoundingClientRect();

        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);

        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
            const x = Math.random() * 200 - 100;
            const y = Math.random() * 200 - 100;

            noBtn.style.transform = `translate(${x}px, ${y}px)`;
        }
    });


    // 💖 Buttons
    window.yes = function () {
        document.getElementById("response").innerText =
            "You just made me the happiest person alive 😭💖 I will treat you right and always make you smile!";
    };

    window.no = function () {
        document.getElementById("response").innerText =
            "You caught me 😭 but I still like you!";
    };

});
