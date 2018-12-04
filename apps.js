var smsHello = document.querySelector(".myName");
var smsOcuup = document.querySelector(".occupation");
var smsILike = document.querySelector(".iLike");
var smsInput = document.querySelector("#inputYouName");
var valid = document.querySelector("#valid")
var smsLong = document.querySelector(".long");
var sms = document.querySelector(".regards");


setTimeout(function () {
    smsHello.style.display = "block";
}, 1000);

setTimeout(function () {
    smsOcuup.style.display = "block";
}, 2000);

setTimeout(function () {
    smsILike.style.display = "block";
}, 3000);



setTimeout(function () {
    smsInput.style.display = "block";
    document.querySelector('#inputYouName').addEventListener('keypress', function (e) {
        var key = e.which || e.keyCode;
        if (key === 13) { // 13 is enter


            if (smsInput.value.length > 1) {


                if (smsInput.value.length > 6) {
                    smsLong.textContent = "That’s a long name."
                    smsLong.style.display = "block";
                    valid.style.display = "none";

                } else if (smsInput.value.length < 6) {
                    smsLong.innerHTML = "That’s a short name."
                    smsLong.style.display = "block";
                    valid.style.display = "none";
                }

                setTimeout(function () {
                    sms.style.display = "block"
                    sms.textContent = "Nice to meet you, " + smsInput.value + "!";
                }, 1000);

            } else {
                valid.textContent = ("Must be greater than two letters.")
            }

        }

    });
}, 4000);