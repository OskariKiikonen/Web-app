
const emailnappi = document.querySelector('.lahetanappi');

emailnappi.addEvenetListener('click', e => {
  e.preventDefault();

    sendJSON();


});

function sendJSON(){
  let xhr = new XMLHttpRequest();
  let url = "yees";

  xhr.open("POST", url, true);

  xhr.setRequestHeader("Content-type", "application/json");

  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
      console.log("valmis, yhteys toimii");
    }
  };
  var data = JSON.stringify({
    "EmailMsg": "Tähän tulee postin sisältö", //Kirjoittaa sisällön
    "EmailAddress": "oskari.kiikonen@edu.salpaus.fi", //viestin kirjoittajan sähköposti
    "EmailTo": "oskar1kiikonen@gmail.com", //oma sähköpostisi
    "EmailName": "Teppo Tyyppi" //Nimi kentän sisältö
  });
  xhr.send(data);
}