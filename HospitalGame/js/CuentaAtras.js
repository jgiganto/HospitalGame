function countdown(element, minutes, seconds) {
    // Fetch the display element
    var el = document.getElementById(element);
    // Set the timer
    var interval = setInterval(function () {
        if (seconds == 0) {
            if (minutes == 0) {
                (el.innerHTML = "STOP!");//AQUI SE EJECUTA ALGO CUANDO FINALIZA LA CUENTA ATRAS                
                //clearInterval(interval); 22:00 Jesús hay que hacer una variable interval por cada reloj captura con un if quien llego
                // a cero y que llame a countdown
                //alert("dentro");
                if (element == 'countdown1') { a = true; }
                if (element == 'countdown2') { b = true;  }
                if (element == 'countdown3') { c = true;  }
                clickbutton(a, b, c);
                return;
            } else {
                minutes--;
                seconds = 60;
            }
        }

        if (minutes > 0) {
            var minute_text = minutes + (minutes > 1 ? ' minutes' : ' minute');
        } else {
            var minute_text = '';
        }

        var second_text = seconds > 1 ? '' : '';

        el.innerHTML = minute_text + ' ' + seconds + ' ' + second_text + '';
        seconds--;
    }, 1000);
}