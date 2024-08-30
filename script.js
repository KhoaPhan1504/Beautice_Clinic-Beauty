// Hover Item Profession
const items = document.querySelectorAll('.profession_item_row');

items.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.classList.add('Card');
    
    items.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.add('not-hovered');
      }
    });
  });

  item.addEventListener('mouseout', () => {
    item.classList.remove('Card');
    
    items.forEach(otherItem => {
      otherItem.classList.remove('not-hovered');
    });
  });
});