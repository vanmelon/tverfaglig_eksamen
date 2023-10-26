// Få referanser til søkeknapp og inputfelt
var searchButton = document.getElementById("searchButton");
var searchInput = document.getElementById("searchInput");

// Legg til en klikk-hendelse for søkeknappen
searchButton.addEventListener("click", function() {
    var searchTerm = searchInput.value.toLowerCase(); // Konverter til små bokstaver for å unngå case-sensitivitet

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
