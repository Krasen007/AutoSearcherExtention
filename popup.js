let addSearch = document.getElementById('addSearch');

let searchQuery = document.getElementById('searchQuery');
let searchString = document.getElementById('searchString');


// function AddNewSearch() {
//     var d = document.getElementById("searchString");
//     d.innerHTML += "<input id='searchString' type='text' name='search' placeholder='Search..' onkeydown='search(this)'/>";
// }

addSearch.onclick = function anon2(params) {
   // AddNewSearch();
    console.log("Button is clicked");
}

// Open search on pressing enter button.
function Search() {
    if (event.key === 'Enter') {
        OpenPredefinedSearches();
    }
}

// Performs search on pressing the search button.
searchQuery.onclick = function anon() {
    OpenPredefinedSearches();
}

// List of predefined search sites.
function OpenPredefinedSearches() {
    window.open('https://fly.bg/index.php?route=index&action=listing&q=' + searchString.value);
    // window.open('https://www.it4profit.com/shop/pages/catalog.xhtml?searchString=' + searchString.value);
    // window.open('https://polycomp.bg/poly/products'); // does not auto search
    // window.open('https://virtualnazona.com/bg/?subcats=Y&pcode_from_q=Y&pshort=N&pfull=N&pname=Y&pkeywords=Y&search_performed=Y&q=' + searchString.value + '&dispatch=products.search');
    // window.open('https://www.vali.bg/bg/catalog#!?q=' + searchString.value + '&s=newest');
    // window.open('http://techvision-bg.com/bg/search.html?s=' + searchString.value + '&search_posttype=product');
    // window.open('https://www.dekada.com/advanced_search_result.php?keywords=' + searchString.value + '&image=one&search_in_description=0');
    // window.open('https://solytron.bg/product/search?q=' + searchString.value + '&sort=asc');
    // window.open('https://www.itshop.bg/search.html?phrase=' + searchString.value + '&x=0&y=0');
}
