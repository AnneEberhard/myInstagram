let posts = [
  {
    profilePic: "./img/p/1.jpg",
    author: "Anna",
    image: "./img/1.jpg",
    text: "Mitreißendes Drama!",
    url: "https://mybook.to/Daemonenritt",
    comments: [],
    like: 0,
  },
  {
    profilePic: "./img/p/2.jpg",
    author: "Bree",
    image: "./img/4.jpg",
    text: "Dramatisch und unerwartet!",
    url: "https://mybook.to/UnheiligeMittel",
    comments: [],
    like: 0,
  },
  {
    profilePic: "./img/p/3.jpg",
    author: "Lotte",
    image: "./img/9.jpg",
    text: "Ein Märchen mit einem Twist",
    url: "https://mybook.to/Ertolia",
    comments: [],
    like: 0,
  },
  {
    profilePic: "./img/p/1.jpg",
    author: "Anna",
    image: "./img/2.jpg",
    text: "Großartige, epische Trilogie",
    url: "https://mybook.to/Elfenweg",
    comments: [],
    like: 0,
  },
  {
    profilePic: "./img/p/1.jpg",
    author: "Anna",
    image: "./img/5.jpg",
    text: "So muss historische Fiktion sein.",
    url: "https://mybook.to/Alsterdiamanten",
    comments: [],
    like: 0,
  },
  {
    profilePic: "./img/p/1.jpg",
    author: "Anna",
    image: "./img/3.jpg",
    text: "Herzerwärmend!",
    url: "https://mybook.to/VonElfenUndWoelfen",
    comments: [],
    like: 0,
  },

  {
    profilePic: "./img/p/1.jpg",
    author: "Anna",
    image: "./img/6.jpg",
    text: "Ein prall gefülltes Gemälde des ausgehenden achtzehnten Jahrhunderts!",
    url: "https://mybook.to/DerGeistInBrand",
    comments: [],
    like: 0,
  },
  {
    profilePic: "./img/p/1.jpg",
    author: "Anna",
    image: "./img/7.jpg",
    text: "Detailgetreu recherchierte Reise ind Florenz des 15. Jahrhunderts",
    url: "https://mybook.to/DieMaskenvonFlorenz ",
    comments: [],
    like: 0,
  },
  {
    profilePic: "./img/p/1.jpg",
    author: "Anna",
    image: "./img/8.jpg",
    text: "Die Kreuzfahrer aus den Augen eines jungen Mädchens",
    url: "https://mybook.to/IrrfahrtInsGelobteLand",
    comments: [],
    like: 0,
  },

  {
    profilePic: "./img/p/3.jpg",
    author: "Lotte",
    image: "./img/10.jpg",
    text: "Eine Erzählung mit Erotik",
    url: "https://mybook.to/LilysStil",
    comments: [],
    like: 0,
  },
];
let pics = [
    {
      profilePic: "./img/p/1.jpg",
      author: "Anna",
      link: "./profileAnna.html",
    },
    {
        profilePic: "./img/p/2.jpg",
        author: "Bree",
        link: "./profileBree.html",
      },
      {
        profilePic: "./img/p/3.jpg",
        author: "Lotte",
        link: "./profileLotte.html",
      },
      {
        profilePic: "./img/p/4.jpg",
        author: "Hasi",
        link: "./profileHasi.html",
      },
      {
        profilePic: "./img/p/5.jpg",
        author: "Theo",
        link: "./profileTheo.html",
      },
      {
        profilePic: "./img/p/6.jpg",
        author: "Lucia",
        link: "./profileLucia.html",
      },
      {
        profilePic: "./img/p/7.jpg",
        author: "User35",
        link: "./profileUser35.html",
      },
]; 

let proposalArray = [
    {
      profilePic: "./img/p/8.jpg",
      author: "Der_hier",
      link: "./profile1.html",
    },
    {
        profilePic: "./img/p/9.jpg",
        author: "Die_dort",
        link: "./profile2.html",
      },
      {
        profilePic: "./img/p/10.jpg",
        author: "Echt_bekannt",
        link: "./profile3.html",
      },
      {
        profilePic: "./img/p/11.jpg",
        author: "Voll_beliebt",
        link: "./profile4.html",
      },
      {
        profilePic: "./img/p/12.jpg",
        author: "WarumNichtDieHier",
        link: "./profile5.html",
      },
  ];

  load(); //ruft Variablen aus dem local Storage ab

function render() {
  renderMain();
  renderHeader();
  renderProposals();
}

function renderMain() {
  let content = document.getElementById("content"); //weist Container einer Variablen zu
  content.innerHTML = ""; //leert Container-Variable

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i]; //greift Variablengruppe an der i. Stelle aus dem Array ab
    content.innerHTML += postTemplate(post, i); //sauberer Code
    renderLikes(i); //ruft likes aus dem local storage ab
    let postContent = document.getElementById(`postContent${i}`); //CAVE `` Anführungszeichen
    for (let j = 0; j < post["comments"].length; j++) {
      const comment = post["comments"][j]; //greifen an der index. Stelle auf array coments im JSON land zu
      postContent.innerHTML += `<div class="padding">${comment}</div>`; //schreibt Kommentare in div
    }
  }
}

function postTemplate(post, i) { //gibt Inhalt zurück, sauberer Code
return /*html*/ `
  <div class ="card">
      <div class="profiles">
          <img class="profileImage" src='${post["profilePic"]}'>
          <h2>${post["author"]}</h2> <!--greift die Untervariable aus meiner i. Variablengruppe ab-->
      </div>      
      <div id="postContent${i}"> <!--kombiniert postContent mit i zu individuellen id-->
          <div class="center">    
              <img class="postImage" src='${post["image"]}'>
              <a class="postLink" target="_blank" href='${post["url"]}'>${post["url"]}</a>
          </div>
          <div id="likeId${i}" class="liking"></div>
          <p class="padding">${post["text"]}</p>
      </div> 
      <input class="padding" placeholder="Kommentieren ..." id="input${i}"><button onclick="addComment(${i})">posten</button> 
  </div>
  <div class="divider"></div>`;
}

function addComment(index) {
  let comment = document.getElementById(`input${index}`); //CAVE `` Anführungszeichen
  posts[index]["comments"].push(comment.value); //CAVE Value
  renderMain(); //schreibt neuen Kommentar auch in die div
  comment.value = ""; //löscht das Eingabefeld wieder
  save(); // im LocalStorage sichern
}

function renderLikes(i) {
  if (posts[i][like] == 0) {
    unlike(i);
  } else {
    like(i);
  }
}

function renderHeader() {
    let header = document.getElementById("header"); //weist Container einer Variablen zu
    header.innerHTML = ""; //leert Container-Variable
    for (let i=0; i<pics.length; i++) {
        const pic = pics[i]; //greift Variablengruppe an der i. Stelle aus dem Array ab
        header.innerHTML += /*html*/ `<a href='${pic["link"]}' class="pics">
        <img class="picImage" src='${pic["profilePic"]}'>
        <h3>${pic["author"]}</h3>
    </a> `;
    }
}

function renderProposals() {
    let proposals = document.getElementById("proposals"); //weist Container einer Variablen zu
    proposals.innerHTML = ""; //leert Container-Variable
    for (let i=0; i<proposalArray.length; i++) {
        const proposal = proposalArray[i]; //greift Variablengruppe an der i. Stelle aus dem Array ab
        proposals.innerHTML += /*html*/ `<a href='${proposal["link"]}'>
            <img class="profileImage margin" src='${proposal["profilePic"]}'>
            <h3>${proposal["author"]}</h3>
        </a>`;
    }
}

function like(i) { 
document.getElementById(`likeId${i}`).innerHTML = `<img src="./icon/like.png" onclick="unlike(${i})">`;
posts[i][like] = 1;
save();
}

function unlike(i) { 
  document.getElementById(`likeId${i}`).innerHTML = `<img src="./icon/unlike.png" onclick="like(${i})">`;
  posts[i][like] = 0;
  save();
  }

function save() {
  let postsAsText = JSON.stringify(posts); //schreibt das Array in eine Textvariable
  localStorage.setItem("posts", postsAsText); //speichert die Textvariable im Local Storage
}

function load() {
  let postsAsText = localStorage.getItem("posts");//Daten werden aus dem Local Storage abgerufen und der Stringvariablen zugewiesen
  if (postsAsText){ //if Abfrage testet nur, ob die beiden Variable im Local Storage existieren
    posts = JSON.parse(postsAsText);//String Variable wird wieder in ein Array umgewandelt,CAVE: kein let weil globale Variable!!
}}

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
          /* Make an HTTP request using the attribute value as the file name: */
          xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function () {
              if (this.readyState == 4) {
                  if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                  if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                  /* Remove the attribute, and call this function once more: */
                  elmnt.removeAttribute("w3-include-html");
                  includeHTML();
              }
          }
          xhttp.open("GET", file, true);
          xhttp.send();
          /* Exit the function: */
          return;
      }
  }
}