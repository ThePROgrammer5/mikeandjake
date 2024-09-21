

function notifyMe(body, title, onclick) {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    }
    else {
      var notification = new Notification(title, {
      icon: 'img/favicon.jpg',
      body: body,
     });
     notification.onclick = function() {
     window.open('https://www.youtube.com/c/MIKEANDJAKEKIDSCHANNEL/featured');
    };
   }
  };
  function updateCoins() {
    const coinsText = document.getElementById('coins');
    const cookie = getCookie('coins');
    alert(cookie);
    console.log(cookie);
    const coinsValue = document.querySelector('.coins-value');
    coinsText.innerHTML = `<i class="fa-solid fa-coins"></i> ${cookie}`;
  }
  
  // Set the cookie on both pages
  function setCookie(name, value) {
    try {
      const expires = new Date();
      expires.setTime(expires.getTime() + (365 * 24 * 60 * 60 * 1000)); // 365 days
      document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`;
      console.log("Cookie set successfully.");
    } catch (error) {
      console.error("Error setting cookie:", error);
    }
  }
  
  
  // Function to get the cookie value
  function getCookie(name) {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.indexOf(name + "=") === 0) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  }
  
function setUp() {
  setCookie("coins", 200);
  updateCoins();
}

window.addEventListener('load', function() {
  setUp();
});
 