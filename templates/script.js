$(document).ready(function() {
  // handle form submission
  $("#chatbot-form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#user-input").val();
    addChat("user", userInput);
    $("#user-input").val("");
    sendRequest(userInput);
  });
});

function addChat(sender, message) {
  var chatbotBody = $("#chatbot-body");
  var chatClass = sender === "user" ? "user-chat" : "bot-chat";
  chatbotBody
}