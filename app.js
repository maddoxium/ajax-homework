var topics = ["Anime","Food","Games"]

var body =  "#body"

  
function renderButtons() {
    $("#buttons-view").empty();
for (i = 0; i < topics.length; i++) { 
    var btn = $("<button>");
    btn.addClass("topic");
    btn.attr("id", topics[i]);
    btn.text(topics[i]);
    $("#buttons-view").append(btn);
}
}
renderButtons();

var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=Z0zBY7wum0yjVC4oXH88nferaJ8cVSfl&limit=5");
xhr.done(function(data) { console.log("success got data", data); });

apiKey = "Z0zBY7wum0yjVC4oXH88nferaJ8cVSfl"

gipyURL = "http://api.giphy.com/v1/gifs/search?q="+ "id" +"&api_key" + apiKey +"&limit=10"


$.ajax({
    url: giphyURL,
    method: "GET"
  })