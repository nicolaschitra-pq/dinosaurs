var menuLinks = document.querySelectorAll("nav a");

for (var i = 0; i < menuLinks.length; i++) {
    menuLinks[i].onclick = function(e) {
        e.preventDefault();

        var teks = this.innerText;

        if (teks === "Breakfast" || teks === "Traditional") {
            document.getElementById("makanan").scrollIntoView({
                behavior: "smooth"
            });
        }

        else if (teks === "Cold Drink" || teks === "Hot Drink") {
            document.getElementById("minuman").scrollIntoView({
                behavior: "smooth"
            });
        }

        else if (teks === "Ringan" || teks === "Berat") {
            document.getElementById("snack").scrollIntoView({
                behavior: "smooth"
            });
        }

        else if (teks === "Diskon") {
            alert("Diskon 50%!");
        }

        else if (teks === "Bundle") {
            alert("Bundle hemat!");
        }

        else if (teks === "Daftar") {
            document.getElementById("form").scrollIntoView({
                behavior: "smooth"
            });
        }

        else if (teks === "Login") {
            alert("Login belum tersedia");
        }
    };
}

var total = 0;

function beli(namaProduk, harga){
    var list = document.getElementById("cartList");
    var item = document.createElement("li");
	
    item.innerText = namaProduk + " - Rp " + harga;
    list.appendChild(item);
    total += harga;
	
    document.getElementById("totalHarga").innerText =
    "Total: Rp " + total;
}

function showPopup(text){
    var popup = document.getElementById("popup");
    var popupText = document.getElementById("popupText");

    popupText.innerText = text;
    popup.classList.add("show");

    setTimeout(function(){
        popup.classList.remove("show");
    }, 2000);
}
