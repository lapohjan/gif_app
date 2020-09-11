(function () {
    function giphySearch(keyword) {
        return fetch(`http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${GIPHY_KEY}&limit=20`)
        .then(response => response.json())
    }
  
    function appendImage(img) {
      let $div = $('<div class="img-wrapper"></div>');
      $('<div class="inner"></div>').append(img).appendTo($div);
      $('#thumbs').append($div)
    }
  
    (function listenOnFormSubmit() {
      $('#searchForm').submit((ev) => {
        ev.preventDefault();
        let $input = $('#searchInput');
  
        main($input.val());
      });
    })();
  

    async function main(searchKeyword) {
      const result = await giphySearch(searchKeyword);
      $('#thumbs').html('');
      result.data.forEach(data => {
          let img = new Image();
          img.src = data.images.original.url;
          appendImage(img);
      })
    }
  })();



/*
Another possibility that I didn't take further:
var api = "http://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=XXXXXXX";
var query = "&q=rainbow";

//word rainbow would need to be replaced with user's search word(s)

function setup() {
    noCanvas();
    var url = api + apiKey + query;
    loadJSON(url, gotData);
}

function gotData(giphy) {
    for (var i = 0; i < giphy.data.length; i++) {
        createImg(giphy.data[i].images.original.url);
    }
}

function draw() {

}

*/