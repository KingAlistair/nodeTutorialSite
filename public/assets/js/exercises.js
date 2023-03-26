
function startNode() {

    const runNodeInput = document.getElementById("runNodeInput");
    const runNodeOutput = document.getElementById("runNodeOutput");
    const ggMessage = document.getElementById("gg-message");
    const tip8 = document.getElementById("tip8");

    if (runNodeInput.value === "node app.js") {
        runNodeOutput.innerText = "Server is running on port: 8080"
        ggMessage.innerText = "Congratulations! Your first server is up and running!"
        tip8.innerText = "8. If you want to stop your server, use command; ctrl + c "
        tip8.style="font-weight: bold;"
    } else {
        runNodeOutput.innerText = "An error has occured!"
    }
}