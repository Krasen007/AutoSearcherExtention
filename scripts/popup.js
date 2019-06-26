let searchQueryButton = document.getElementById('searchQueryButton');
let searchFieldString = document.getElementById('searchField');

// Open search on pressing enter button.
function Search() {
    if (event.key === 'Enter' && !(searchFieldString.value === "" || searchFieldString.value === " ")) {
        OpenPredefinedSearches();
    }
}

// Performs search on pressing the search button.
searchQueryButton.onclick = function () {
    if (!(searchFieldString.value === "" || searchFieldString.value === " ")) {
        OpenPredefinedSearches();
    }
}

// List of predefined search sites.
function OpenPredefinedSearches() {
    window.open('https://fly.bg/index.php?route=index&action=listing&q=' + searchFieldString.value);
    window.open('https://www.it4profit.com/shop/pages/catalog.xhtml?searchString=' + searchFieldString.value);
    window.open('https://polycomp.bg/poly/products'); // does not auto search
    window.open('https://virtualnazona.com/bg/?subcats=Y&pcode_from_q=Y&pshort=N&pfull=N&pname=Y&pkeywords=Y&search_performed=Y&q=' + searchFieldString.value + '&dispatch=products.search');
    window.open('https://www.vali.bg/bg/catalog#!?q=' + searchFieldString.value + '&s=newest');
    window.open('http://techvision-bg.com/bg/search.html?s=' + searchFieldString.value + '&search_posttype=product');
    window.open('https://www.dekada.com/advanced_search_result.php?keywords=' + searchFieldString.value + '&image=one&search_in_description=0');
    window.open('https://solytron.bg/product/search?q=' + searchFieldString.value + '&sort=asc');
    window.open('https://www.itshop.bg/search.html?phrase=' + searchFieldString.value + '&x=0&y=0');
}