function animateTitle(Title = "Hannah Foppoli Hernandez", delay = 250) {
    let counter = 0;
    let direction = true;
    aniTitle = setInterval(function () {
        if (counter == Title.length)
            direction = false;
        if (counter == false)
            direction = true;
        counter = (direction == true) ? ++counter : --counter;
        newtitle = (counter == 0) ? " " : Title.slice(0, counter);
        document.title = newtitle;
    }, delay)
}

animateTitle()


function lastUpdated() {
    var x = document.lastModified;
    document.getElementById("date1").innerHTML = x;
}


  
