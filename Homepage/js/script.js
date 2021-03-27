const menuAvatar = document.getElementById("menuAvatar");
const profil = document.getElementById("profil");

profil.addEventListener("click", () => {
    if(menuAvatar.style.display === "block"){
        menuAvatar.style.display = "none";
    }else{
        menuAvatar.style.display = "block";
    }
})