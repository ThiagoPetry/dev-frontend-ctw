var status = 0;

document.getElementById("btn-open").addEventListener("click", function() {
    if(status == 0) {
        document.getElementById("btn-open").style.transform = "rotate(225deg)";
        document.getElementById("btn-open").style.marginLeft = "96.7%";

        document.getElementById("container-menu").style.transform = 'translateX(11vw)';
        document.getElementById("user-img").style.transform = 'translateX(-11vw)';
        document.getElementById("user-img").style.width = '8vh';
        document.getElementById("user-img").style.height = '9.25vh';

        document.getElementById("news-img").style.transform = 'translate(-12vw, 2vh)';
        document.getElementById("news-img").style.width = '2.75vh';
        document.getElementById("news-img").style.height = '2.6vh';

        document.getElementById("exit-img").style.transform = 'scale(0.8, 0.675)';

        document.getElementById("user-name").style.display = "block";
        document.getElementById("title-not").style.display = "block";    
        document.getElementById("line-blue").style.display = "block";
        document.getElementById("refresh-img").style.display = "block";
        document.getElementById("delete-img").style.display = "block";
        document.getElementById("container-msg").style.display = "block";

        status++;
    } else {
        document.getElementById("container-menu").style.transform = 'translateX(0vw)';
        document.getElementById("user-img").style.transform = 'translateX(0vw)';
        document.getElementById("user-img").style.width = '6vh';
        document.getElementById("user-img").style.height = '7.25vh';

        document.getElementById("news-img").style.transform = 'translate(0vw, 0vh)';
        document.getElementById("news-img").style.width = '5vh';
        document.getElementById("news-img").style.height = '4.6vh';

        document.getElementById("exit-img").style.transform = 'scale(1, 1)';
        document.getElementById("exit-img").style.width = '5vh';
        document.getElementById("exit-img").style.height = '5vh';

        document.getElementById("user-name").style.display = "none";
        document.getElementById("title-not").style.display = "none";
        document.getElementById("line-blue").style.display = "none";
        document.getElementById("refresh-img").style.display = "none";
        document.getElementById("delete-img").style.display = "none";
        document.getElementById("container-msg").style.display = "none";

        document.getElementById("btn-open").style.transform = "rotate(45deg)";
        document.getElementById("btn-open").style.marginLeft = "97.5%";

        status--; 
    }
});