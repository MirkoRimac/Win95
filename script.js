
const Winamp = window.Webamp;
// All configuration options are optional.
const webamp = new Webamp({
    // Optional.
    initialTracks: [
        {
            metaData: {
                artist: "Rick Astley",
                title: "Never Gonna Give You Up",
            },
            url: "./mp3/Rick Astley - Never Gonna Give You Up (Official Music Video).mp3",
        }, {
            metaData: {
                artist: "Unbekannt",
                title: "Numa Numa",
            },
            url: "./mp3/Numa Numa.mp3",
        },
        {
            metaData: {
                artist: "Unbekannt",
                title: "Windows Error Song",
            },
            url: "./mp3/Computer Error Song.mp3",
        },
      ],
    initialSkin: {
        url: "./wsz/base-2.91.wsz"
    },
});
webamp.renderWhenReady(document.getElementById('winamp-container'));


document.addEventListener("DOMContentLoaded", function() {
    // Show Windows 95-style error modal
    var win95ErrorModal = document.getElementById("win95-error");
    win95ErrorModal.style.display = "block";

    // Play Windows error sound
    var windowsErrorSound = document.getElementById("windows-error-sound");
    windowsErrorSound.play();

    // Fix it button event
    var fixItButton = document.getElementById("fix-it-button");
    fixItButton.addEventListener("click", function() {
        // Show loading screen
        var loadingScreen = document.getElementById("loading-screen");
        loadingScreen.style.display = "block";

        // Hide error modal after a delay (simulating fix operation)
        setTimeout(function() {
            win95ErrorModal.style.display = "none";
            loadingScreen.style.display = "none";
        }, 3000); // Adjust the delay (in milliseconds) as needed
    });

    // Close the error modal when the close button is clicked
    var closeButton = win95ErrorModal.querySelector(".x");
    closeButton.addEventListener("click", function() {
        win95ErrorModal.style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Function to show error modal
    function showErrorModal() {
        var win95ErrorModal = document.getElementById("win95-error");
        win95ErrorModal.style.display = "block";

        // Play Windows error sound
        var windowsErrorSound = document.getElementById("windows-error-sound");
        windowsErrorSound.play();

        // Fix it button event
        var fixItButton = document.getElementById("fix-it-button");
        fixItButton.addEventListener("click", function() {
            // Show loading screen
            var loadingScreen = document.getElementById("loading-screen");
            loadingScreen.style.display = "block";

            // Hide error modal after a delay (simulating fix operation)
            setTimeout(function() {
                win95ErrorModal.style.display = "none";
                loadingScreen.style.display = "none";
            }, 3000); // Adjust the delay (in milliseconds) as needed
        });

        // Close the error modal when the close button is clicked
        var closeButton = win95ErrorModal.querySelector(".x");
        closeButton.addEventListener("click", function() {
            win95ErrorModal.style.display = "none";
        });
    }

    // Attach click event listener to elements with the error-trigger class
    var errorTriggerLinks = document.querySelectorAll(".error-trigger");
    errorTriggerLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            // Prevent the default action of the link
            event.preventDefault();
            // Call the showErrorModal function when the link is clicked
            showErrorModal();
        });
    });
});