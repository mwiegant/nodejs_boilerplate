// Functionality for 'viewdata.html' web page


( function() {

    // gets the set of existing data sets from the database
    function populatePage() {
        //todo
    }

    function init() {
        populatePage();

        document.getElementById("createnew").onclick = function() {
            location.href = "/edit";
        }
    }



    init();

})();