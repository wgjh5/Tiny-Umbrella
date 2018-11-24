export default {
    setCookie(name, value) {
        var days = 10;
        var ex = new Date();
        ex.setTime(ex.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = name + "=" + value + ";expires=" + ex;
    },
    getCookie(name) {
        var reg = new RegExp("(^|)" + name + "=([^;]*)(;|$)");
        var a = document.cookie.match(reg);
        if (a) {
            return a[2];
        }
    },
    countdown(endtime) {
        var time = new Date();
        var b = time.getTime();
        var c = endtime - b;
        var d = parseInt(c / 1000);
        var minutes1 = parseInt(d / 60) % 60;
        var seconds1 = d % 60;
        var hours1 = parseInt(d / 3600) % 24;
        var day1 = parseInt(d / 3600 / 24);
        if (day1 < 10) {
            day1 = '0' + day1
        }
        if (hours1 < 10) {
            hours1 = '0' + hours1
        }
        if (minutes1 < 10) {
            minutes1 = '0' + minutes1
        }
        if (seconds1 < 10) {
            seconds1 = '0' + seconds1
        }
        return day1 + '天' + hours1 + ':' + minutes1 + ':' + seconds1
    }
}