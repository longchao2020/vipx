document.addEventListener('DOMContentLoaded', function(){
  var els = document.querySelectorAll('.mc-pro, .star-card, .stat-cell');
  els.forEach(function(el, i){
    el.style.opacity = '0';
    el.style.transform = 'translateY(14px)';
    setTimeout(function(){
      el.style.transition = 'opacity .5s ease, transform .5s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 28 * Math.min(i, 24));
  });
});
