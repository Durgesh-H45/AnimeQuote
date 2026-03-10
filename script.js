async function getQuote() {

const url = "https://api.animechan.io/v1/quotes/random";

  try {
    const response = await fetch(url);
    const data = await response.json();

    document.getElementById("quote").innerText = `"${data.data.content}"`;
    document.getElementById("character").innerText = data.data.character.name;
    document.getElementById("anime").innerText = data.data.anime.name;

  } catch (error) {
    document.getElementById("quote").innerText = "...Only 5 quotes allowed...";
  }
}

getQuote();