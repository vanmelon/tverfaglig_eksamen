
document.addEventListener("DOMContentLoaded", function() {
    // Hent referanser til søkeknappen og inputfeltet
    var searchButton = document.getElementById("searchButtonID");
    var searchInput = document.getElementById("searchInputID");

    // Legg til en klikk-hendelse for søkeknappen
    searchButton.addEventListener("click", function() {
        // Få verdien fra inputfeltet og konverter til små bokstaver for å unngå case-sensitivitet
        var searchTerm = searchInput.value.toLowerCase();

        // Sjekk hvilken blomst som tilsvarer søket
        switch (searchTerm) {
            case "jennifer-coffin-grey":
                window.location.href = "#jennifer-coffin-grey";
                break;
            case "tulip":
                window.location.href = "#tulip";
                break;
            case "ost":
                window.location.href = "#ost";
                break;
            // Legg til flere saker for andre blomster
            default:
                alert("Ingen samsvar funnet.");
        }
    });
});
