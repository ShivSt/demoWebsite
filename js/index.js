// Writing self invoking function
// It encapsulate the names within it and not populate global namespace
(function(){
    var IndexElements = {
        searchForm: document.getElementsByName('searchForm')[0],
        searchInput: document.getElementsByName('searchInput')[0],
        searchButton: document.getElementsByName('searchBtn')[0],
        body: document.querySelector('body'),
    }

    
    IndexElements.searchForm.onsubmit = function(){
        /* Definition for search button functionality*/
        const bodyText = IndexElements.body.innerText.toLowerCase();
        const inputText = IndexElements.searchInput.value.toLowerCase();
        if( bodyText.includes(inputText) ){
            const re = new RegExp(inputText, 'g')
            const noOfMatches = bodyText.match(re).length
            alert("Found "+noOfMatches+" in the page");
            console.log("Found "+noOfMatches+" in the page");
        }
    };

    

})();