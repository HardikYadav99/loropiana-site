// code for search bar 

function searchContent() {
    // Get the search input value
    var searchText = document.getElementById("searchInput").value.toLowerCase();

    // Get all elements on the webpage
    var elements = document.getElementsByTagName("*");

    // Initialize an empty array to store matching elements
    var searchResults = [];

    // Loop through all elements
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        // Check if the element contains the search text
        if (element.innerText.toLowerCase().includes(searchText)) {
            // If it contains the search text, add it to the search results array
            searchResults.push(element.outerHTML);
        }
    }

    // Display search results
    displaySearchResults(searchResults);
}

function displaySearchResults(results) {
    var searchResultsDiv = document.getElementById("searchResults");
    searchResultsDiv.innerHTML = "";

    if (results.length > 0) {
        // If there are search results, display them
        for (var i = 0; i < results.length; i++) {
            var result = results[i];
            var resultDiv = document.createElement("div");
            resultDiv.innerHTML = result;
            searchResultsDiv.appendChild(resultDiv);
        }
    } else {
        // If no results found, display a message
        searchResultsDiv.innerHTML = "No results found.";
    }
}



// Your JavaScript code
let lastScrollTop = 0;

window.addEventListener("scroll", function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling down
        document.querySelector("footer").classList.add("hidden");
    } else {
        // Scrolling up
        document.querySelector("footer").classList.remove("hidden");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);

