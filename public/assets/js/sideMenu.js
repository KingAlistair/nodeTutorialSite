var mini = true;

function toggleSideMenu() {
  if (mini) {
    document.getElementById("mySideMenu").style.width = "250px";
   //document.getElementById("main").style.marginLeft = "250px";
    this.mini = false;
  } else {
    document.getElementById("mySideMenu").style.width = "85px";
   //document.getElementById("main").style.marginLeft = "85px";
    this.mini = true;
  }
}
