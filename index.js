var scrollOffset = window.pageYOffset || document.documentElement.scrollTop;
var companies = document.querySelector('.compare-companies-inner');
var companiesOffset = companies.offsetTop;
var scrolling = '-scrolling';

function moveCompanies() { 
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop >= companiesOffset) { 
    companies.classList.add(scrolling);
  } else { 
    companies.classList.remove(scrolling);
  }
}

window.addEventListener('scroll', moveCompanies);


var Star = {
  stars: document.querySelectorAll('.star'),
  
  init: function() {
    var i,
        star,
        starShape,
        transitionStar;
    
    for (i = 0; i < this.stars.length; i++) {
      star = this.stars[i];
      starShape = star.querySelector('.star-fill');
      transitionStar = this.shouldTransitionStar(star);
        
      if (transitionStar) { 
        this.setTransitionDelay(starShape, i);
        this.transition(star, i);
      }
    }
  },
  
  shouldTransitionStar: function(el) { 
    if (el.classList.contains('-us') || 
        el.classList.contains('-us-half')) {  
      return true;
    }
  },
  
  transition: function(el) {
    el.classList.add('-active');
  },
  
  getTransitionDelay: function(multiplier) { 
    var delay = (multiplier * .75) * 200;
    
    return `${delay}ms`;
  },
  
  setTransitionDelay: function(element, delay) { 
    element.style.transitionDelay = this.getTransitionDelay(delay);
  }
};

// Initialize
window.onload = function() { 
  // Animate stars
  var stars = Object.create(Star);
  stars.init();
}