const sectionContent = Array.prototype.slice.call( document.querySelectorAll(".section-content") );

const toggleColors = Array.prototype.slice.call( document.querySelectorAll(".toggle-color") );


document.addEventListener("DOMContentLoaded", function() {
  sectionContent.forEach((row, i, all) => {
  let waypont = new Waypoint({
      element: row,
      handler: function(direction) {

        if( direction === "down" ) {
    
          toggleColors[i].style.fill = row.dataset.fillColor;
        } else {
          if(i !== 0 ) {
            toggleColors[i].style.fill = "#D9DFE2";
          }
         
        }
      },
      offset: "60%"
    });
  });
});