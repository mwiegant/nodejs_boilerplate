// Functionality for index.html webpage

(function() {

        // setup click events for the buttons on the page
        document.getElementById("viewdata").onclick = function () {
            location.href = "/view";
        };

        document.getElementById("viewdoc").onclick = function () {
            location.href = "/viewdocs";
        };

        document.getElementById("viewprofile").onclick = function () {
            location.href = "/profile";
        };

})();

