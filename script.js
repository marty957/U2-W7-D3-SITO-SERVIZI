const fetchLibrery = () => {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((responseObj) => {
      // console.log(responseObj);
      if (responseObj.ok) {
        return responseObj.json();
      }
    })
    .then((cardObj) => {
      console.log(cardObj);

      const row = document.getElementById("row"); //recupero il contenitore row per poterlo utiliizzare

      cardObj.forEach((obj) => {
        const col = document.createElement("div"); // creo un colonna
        col.className = "col-3 g-3";
        const card = document.createElement("div"); // div contenitore della card
        card.className = "card w-100 h-100"; //class bootstrap assegnata

        const img = document.createElement("img"); // creo l'immagine della card dove metto la copertina del libro
        img.src = obj.img; // url preso dall'array assegnato
        img.className = "img-fluid";

        const cardBody = document.createElement("div"); //crea il boby della card
        cardBody.className = "card-body";

        const h5 = document.createElement("h5"); // titolo del libro
        h5.className = "card-title";

        const p = document.createElement("p"); // prezzo del libro
        p.className = "card-text";

        h5.innerText = obj.title; // assegnazione del testo al titolo e prezzo in modo dinamico
        p.innerText = obj.price + "$";

        const btn = document.createElement("a"); // creazione bottone scarta
        btn.innerText = "Scarta";
        btn.className = "btn btn-danger me-1";

        const btnBuy = document.createElement("a"); // secondo bottone compra ora
        btnBuy.innerText = "Compra ora";
        btnBuy.className = "btn btn-primary";

        btn.onclick = () => {
          //funzione per rimuovere la card dalla pagina
          //btn.parentNode.parentNode.remove();
          btn.parentNode.parentNode.style.display = "none";
        };
        //funzione sul secondo bottone
        btnBuy.onclick = () => {
          //shopItem(cardObj);
          console.log(btnBuy.parentNode);
          shopItem(obj);
        };

        //creazione effettiva della row a schermo

        cardBody.appendChild(h5);
        cardBody.appendChild(p);
        cardBody.appendChild(btn);
        cardBody.appendChild(btnBuy);
        card.appendChild(img);
        card.appendChild(cardBody);
        col.appendChild(card);
        row.appendChild(col);
      });
    })
    .catch((err) => console.log(err));
};

const shopItem = function (object) {
  const shop = document.getElementById("shop");
  const list = document.createElement("ul");

  const singleBook = document.createElement("il");
    singleBook.innerText = obj.title;
  list.appendChild(singleBook);
  shop.appendChild(list);
};

window.onload = () => [fetchLibrery()];
