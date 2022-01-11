let searchQueryButton = document.getElementById('searchQueryButton');
let searchField = document.getElementById('searchField');

// Open search on pressing enter button.
searchField.addEventListener("keyup", function (event) {
    if (event.key === 'Enter') {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("searchQueryButton").click();
    }
});

// Performs search on pressing the search button.
searchQueryButton.onclick = function () {
    if (!(searchField.value === "" || searchField.value === " ")) {
        OpenPredefinedSearches(searchField.value);
    }
}

// List of predefined search sites.
function OpenPredefinedSearches(inputFieldString) {
    window.open('https://fly.bg/index.php?route=index&action=listing&q=' + inputFieldString);
    window.open('https://www.it4profit.com/shop/pages/catalog.xhtml?searchString=' + inputFieldString);
    window.open('http://techvision-bg.com/bg/search.html?s=' + inputFieldString + '&search_posttype=product');
    window.open('https://www.dekada.com/advanced_search_result.php?keywords=' + inputFieldString + '&image=one&search_in_description=0');
    window.open('https://www.itshop.bg/search.html?phrase=' + inputFieldString + '&x=0&y=0');
    window.open('https://virtualnazona.com/bg/?subcats=Y&pcode_from_q=Y&pshort=N&pfull=N&pname=Y&pkeywords=Y&search_performed=Y&q=' + inputFieldString + '&dispatch=products.search');
    window.open('https://www.vali.bg/bg/catalog#!?q=' + inputFieldString + '&s=newest');
    window.open('https://polycomp.bg/poly/products'); // does not auto search  
    window.open('http://mostbg.com/most/PriceList.aspx'); // does not auto search

    /// window.open('https://solytron.bg/product/search?q=' + inputFieldString + '&sort=asc'); old not working site
}