// Hover Item Profession
document.querySelectorAll('.profession_item_row').forEach(item => {
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
  });

  item.addEventListener('mouseleave', () => {
      document.querySelectorAll('.profession_item_row').forEach(i => {
          i.classList.remove('Card');
          i.classList.remove('not-hovered');
          i.style.width = "calc((1085px - 40px) / 3)";
          i.style.backgroundColor = getCSSVariable('--color-white');
      });
  });
});

function getCSSVariable(variableName) {
  return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
}

