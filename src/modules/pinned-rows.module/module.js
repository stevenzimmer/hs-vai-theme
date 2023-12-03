const pinnedTextColumns = Array.prototype.slice.call( document.querySelectorAll(".pinned-text-column") );

const pinnedImageColumns = Array.prototype.slice.call( document.querySelectorAll(".pinned-img-column") );


document.addEventListener("DOMContentLoaded", function() {
  pinnedTextColumns.forEach((row, i, all) => {
  let waypontDown = new Waypoint({
      element: row,
      handler: function(direction) {

        if(direction === "down") {
          pinnedColumns(i);
          
        }
      },
      offset: "50%"
    });

    let waypontUp = new Waypoint({
      element: row,
      handler: function(direction) {

        if(direction === "up") {
          pinnedColumns(i);
        }

      },
      offset: "0%"
    });

    function pinnedColumns(index) {
  
      pinnedImageColumns.forEach((item, i, all) => {
        item.classList.add("hidden");
      });

      pinnedImageColumns[index].classList.remove("hidden");
    }
  
  });
});