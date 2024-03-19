let input = document.querySelector(".input");
let card = document.querySelector(".card");
let year = document.querySelector(".year");
let link = document.querySelector(".link");
let button = document.querySelector(".click");
let result = document.querySelector(".result");

let card1 = {
   input: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8FuYMRQzSqRg2DTSD4uialvk2jU2edLuGOPxsmFwotTu4mWTwaDtXoAqeGDBiT1InrDs:https://i.ebayimg.com/images/g/b3sAAOSwd7RdMJOY/s-l400.jpg&usqp=CAU",
   card:"Ash Greninja",
   year: "2021",
   link: "https://www.pokemon.com/us/pokemon-tcg/pokemon-cards/xy-series/xyp/XY133/",
};

let card2 = {
  input: "https://i.ebayimg.com/images/g/Ya0AAOSwxZ1h35mw/s-l1200.webp",
  card:"Mega Charizard",
  year: "2018",
  link: "https://www.pokemon.com/us/pokemon-tcg/pokemon-cards/xy-series/xy2/69/",
};

let objects = [card1, card2];

button.onclick = function() {
        let inputValue = input.value;
        let cardValue = card.value;
        let yearValue = year.value;
        let linkValue = link.value;


        let userCard = {
            input: inputValue,
            card: cardValue,
            year: yearValue,
            link: linkValue,
        };

        objects.push(userCard);


        result.innerHTML = " ";

        objects.forEach(function(userCards) {
                        result.insertAdjacentHTML('beforeend', `<img src="${userCards.input}"></img> <li> Card: ${userCards.card} </li> <li> Year: ${userCards.year} </li> <li> Link: ${userCards.link} </li>`);
    
        });
    
    
};

