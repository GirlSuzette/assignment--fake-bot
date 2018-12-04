var sms1 = document.querySelector(".myName");
var sms2 = document.querySelector(".occupation");
var sms3 = document.querySelector(".iLike");
var smsInput = document.querySelector("#inputYouName");
var valid = document.querySelector("#valid")
var sms5 = document.querySelector(".long");
var sms6 = document.querySelector(".regards");


setTimeout(function () {
    sms1.style.display = "block";
}, 1000);

setTimeout(function () {
    sms2.style.display = "block";
}, 2000);

setTimeout(function () {
    sms3.style.display = "block";
}, 3000);



setTimeout(function () {
    smsInput.style.display = "block";
    document.querySelector('#inputYouName').addEventListener('keypress', function (e) {
        var key = e.which || e.keyCode;
        if (key === 13) { // 13 is enter


            if (smsInput.value.length > 1) {

                if (smsInput.value.length > 6) {
                    sms5.textContent = "That’s a long name."
                    sms5.style.display = "block";
                    valid.style.display = "none";

                } else if (smsInput.value.length < 6) {
                    sms5.innerHTML = "That’s a short name."
                    sms5.style.display = "block";
                    valid.style.display = "none";
                }

                setTimeout(function () {
                    sms6.style.display = "block"
                    sms6.textContent = "Nice to meet you, " + smsInput.value + "!";
                }, 1000);

            } else {
                valid.textContent = "Must be greater than two letters.";
            }

        }

    });
}, 4000);