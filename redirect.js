if (/Mobi|Android/i.test(navigator.userAgent)) {
    window.location.href = "homepage(mobile).html";
} else {
    window.location.href = "homepage(desktop).html";
}
