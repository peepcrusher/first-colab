$(document).submit(function () {
   
    event.preventDefault();
    
   // var searchInfo= $(" ").val();

   
    //console.log(searchInfo); 
    var searchArticle = $("#showSearch").val();
    console.log(searchArticle);
    
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchArticle + "&api-key=jFgmUYN77x9HAEqWVGGa2RhxF1GEZEHG&limit=5";

    //key= jFgmUYN77x9HAEqWVGGa2RhxF1GEZEHG

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
         var apiresponse = response.response.docs;

        console.log(response);
        console.log(apiresponse);
        for (i = 0; i < apiresponse.length; i++) {

        
        var headline = apiresponse[i].headline.main;
        var author = apiresponse[i].byline.original;
        var date = apiresponse[i].pub_date;
        var url = apiresponse[i].web_url;

        console.log(headline);
        console.log(author);
        console.log(date);
        console.log(url);


        $(".shows").append ("<div><h2>" + headline+ "</h2></div>"); 
        $(".shows").append ("<div><p>" + author+ "</p></div>"); 
        $(".shows").append ("<div><p>" + date + "</p></div>"); 
        $(".shows").append ("<div><p>" + url + "</p></div>"); 
        
}

        


    });
  

})
