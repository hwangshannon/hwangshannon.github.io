window.addEventListener('load', function () {
    // rotate the site headings
    var rotates = document.getElementsByClassName('h1sideways');
    for (var i = 0; i < rotates.length; i++) {
        rotates[i].style.height = rotates[i].offsetWidth + 'px';
    }

    // add accordion for classes
    var acc = document.getElementById("accordion");
    acc.onclick = function() {
        acc.classList.toggle("active");
        if (acc.innerHTML=="more") acc.innerHTML = "less";
        else acc.innerHTML = "more";
        var panel = document.getElementById('panel');
        if (panel.style.maxHeight){
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }

    // class bolding
    // $(".category-filter .category").on("click", function(event) {

    //   var selected = $(event.target).hasClass("active");
      
    //   if (!selected) {
    //     var category = $(event.target).attr("category");
    //     $(".category-filter .category").removeClass("active");
    //     $(event.target).addClass("active");

    //     // if (category == 'all') {
    //     //   setTimeout(function(){
    //     //     $(".project").fadeIn(300);
    //     //   },300);
    //     // }
    //     // else {
    //     //   setTimeout(function(){
    //     //     $(".category-" + category).fadeIn(300);
    //     //   },300);
    //     // }
    //   }
    // });

    // add accordions for projects
    var projacc = document.getElementsByClassName("projectaccordion");
    // var projpanels = document.getElementsByClassName("projectpanel");
    var i;
    for (i = 0; i < projacc.length; i++) {
      projacc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var projpanel = this.nextElementSibling;
        if (projpanel.style.maxHeight) {
          projpanel.style.maxHeight = null;
        } else {
          projpanel.style.maxHeight = projpanel.scrollHeight + "px";
        } 
      });
    }

  // project filter, adapted from Shannon Peng's website
	$(".category-filter .category").on("click", function(event) {

    var selected = $(event.target).hasClass("active");
    
		if (!selected) {
			var category = $(event.target).attr("category");
			$(".category-filter .category").removeClass("active");
			$(event.target).addClass("active");
      $(".project").fadeOut(300);
      
			if (category == 'all') {
				setTimeout(function(){
					$(".project").fadeIn(300);
				},300);
			}
			else {
				setTimeout(function(){
					$(".category-" + category).fadeIn(300);
				},300);
			}
		}
  });
  
  // shortcut to scroll to sections
  $('a[href*=\\#]').on('click', function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });
});