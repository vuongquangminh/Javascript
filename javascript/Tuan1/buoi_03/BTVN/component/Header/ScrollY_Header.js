function ScrollY_Header() {
    window.addEventListener('scroll', function() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        
        // console.log("Tọa độ Y: " + scrollTop);
        if(scrollTop >= 59 ) {
          NavBar.style.backgroundColor ="#71b171"
        }
        else {
          NavBar.style.removeProperty('background-color')
        }
      });
}

export default ScrollY_Header;