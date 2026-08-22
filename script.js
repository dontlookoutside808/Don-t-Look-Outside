document.addEventListener("DOMContentLoaded", function () {

    // WARNING / ENTER BUTTON
    const warning = document.getElementById("warning");
    const enter = document.getElementById("enter");

    if (warning && enter) {
        enter.addEventListener("click", function () {
            warning.classList.add("hidden");
        });
    }


    // FILE BUTTONS
    const files = {
        "01": "REPORT 01: Multiple residents reported hearing a low singing voice after local television stations went offline.",
        "02": "WITNESS STATEMENT: The witness repeatedly described the subject as human-shaped.",
        "03": "FILE CORRUPTED. A recovered fragment contains one readable sentence: DO NOT LOOK OUTSIDE."
    };

    document.querySelectorAll(".file-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {

            const output = document.getElementById("file-output");

            if (output && files[btn.dataset.file]) {
                output.textContent = files[btn.dataset.file];
            }

        });
    });


    // RARE SCREEN DISTURBANCE
    setInterval(function () {

        if (Math.random() < 0.12) {

            document.body.style.transform =
                `translateX(${Math.random() * 4 - 2}px)`;

            setTimeout(function () {
                document.body.style.transform = "";
            }, 90);

        }

    }, 1800);


    // CONTACT AUTHORITIES
    const contactButton = document.getElementById("contactButton");
    const callScreen = document.getElementById("callScreen");
    const callStatus = document.getElementById("callStatus");
    const creepyAudio = document.getElementById("creepyAudio");
    const endCall = document.getElementById("endCall");


    if (contactButton && callScreen && callStatus) {

        contactButton.addEventListener("click", function () {

            callScreen.style.display = "flex";

            callStatus.textContent = "Calling...";


            setTimeout(function () {

                callStatus.textContent = "CONNECTED";

                if (creepyAudio) {
                    creepyAudio.currentTime = 0;

                    creepyAudio.play().catch(function (error) {
                        console.log("Audio could not play:", error);
                    });
                }

            }, 4000);

        });

    }


    // END CALL
    if (endCall && callScreen) {

        endCall.addEventListener("click", function () {

            if (creepyAudio) {
                creepyAudio.pause();
                creepyAudio.currentTime = 0;
            }

            callScreen.style.display = "none";

        });

    }

});
