xhr = new XMLHttpRequest();

console.log(document.cookie)
document.cookie = "userId=; expires=Thu, 01 Jan 1970 00:00:00 GMT"
console.log(document.cookie)
window.location.href = "../index.html"
// xhr.open("POST" , "http://localhost:8080/Drinkoloy/logout")
// xhr.send();
