var topics = ["Anime","Food","Games"]

var body =  "#body"

  
function renderButtons() {
    $("#buttons-view").empty();
for (i = 0; i < topics.length; i++) { 
    var btn = $("<button>");
    btn.addClass("topic");
    btn.attr("data-name", topics[i]);
    btn.text(topics[i]);
    $("#buttons-view").append(btn);
}
}
renderButtons();