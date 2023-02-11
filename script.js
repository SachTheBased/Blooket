var form = document.getElementById("creds");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    fetch("https://id.blooket.com/api/users/login", {
        headers: {
            cookie: "_ga=GA1.1.1614741172.1670381974; G_ENABLED_IDPS=google; G_AUTHUSER_H=4; _ga_XPTRQH7XY5=GS1.1.1676118573.29.0.1676118575.0.0.0; bsid=MTY3NjEyNDk2OHw4VklrQ1BiOExZQlduSi15VmZtd2xzMXZPX0ZCNHlLbnZJZW12azR4R0Z0SW80SDExYlF6SW1uQjBrOUIwaEg2dDlTRnVzN09YNXIxQlZ0RWJhdnFQV1NjTnVqUnNJWG98sA_VjVAkBZrMiDwWDc4yleY-bOnLLuNKICbZSdbY4Ag="
        },
        method: 'POST',
        body: JSON.stringify({ username: username, password: password })
    })
        .then(response => response.json())
        .then(response => {
            console.log(response)
        })
})
