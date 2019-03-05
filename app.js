$(document).submit(function () {
   
    event.preventDefault();
    
   // var searchInfo= $(" ").val();

   
    //console.log(searchInfo); 
    var searchArticle = $("#showSearch");
    console.log(searchArticle);
    
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchArticle + "&api-key=jFgmUYN77x9HAEqWVGGa2RhxF1GEZEHG&limit=5";

    //key= jFgmUYN77x9HAEqWVGGa2RhxF1GEZEHG

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
         
        console.log(response);

        

       //$(".shows").append (response.docs[0].headline.main ); 
        


    });
  

})
