// Hover Item Profession
document.querySelectorAll('.profession_item_row').forEach((item, index, arr) => {
  item.addEventListener('mouseenter', () => {
      document.querySelectorAll('.profession_item_row').forEach(i => {
          i.classList.remove('Card');
          i.classList.add('not-hovered');
          if (i !== item) {
              i.style.backgroundColor = 'transparent';
          }
      });
      item.classList.add('Card');
      item.classList.remove('not-hovered');
      item.style.backgroundColor = getCSSVariable('--color-white'); 

      if(index === 0) {
        item.classList.add('proffession_card_left');
      } else if(index === arr.length - 1) {
        item.classList.add('proffession_card_right');
      }
  });

  item.addEventListener('mouseleave', () => {
      document.querySelectorAll('.profession_item_row').forEach(i => {
          i.classList.remove('Card');
          i.classList.remove('not-hovered');
          i.classList.remove('proffession_card_left');
          i.classList.remove('proffession_card_right');
          i.style.backgroundColor = getCSSVariable('--color-white');
      });
  });
});

function getCSSVariable(variableName) {
  return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
}


// Scroll To Top
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('scrollBtn').addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
