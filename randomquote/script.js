/**
 * Created by hailin on 10/08/2017.
 */
function getQuote() {
    $.ajax({
        url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
        success: function(data) {
            var post = data.shift(); // The data is an array of posts. Grab the first one
            var author = post.title;
            var quote = post.content;

            $("#quote-author").text("- " + post.title);
            $("#quote-content").html(post.content);

            var tweet = "https://twitter.com/intent/tweet?text=" + encodeURIComponent('"' + quote + '" ' + author);
            // console.log(tweet);
            $("#tweet-btn").href = tweet;

            // var tumblr = "https://www.tumblr.com/widgets/share/tool?posttype=quote&caption=" + encodeURIComponent(author) + "&content=" + encodeURIComponent(quote) ;
            // console.log(tumblr);

            // console.log(post.title);
        },
        cache: false
    });
}

$("#get-quote").on("click", function(e) {
    e.preventDefault();

    getQuote();
});


$(document).ready(function () {
    getQuote();
});