function createBulbs() {
    const numBulbs = document.getElementById('numBulbs').value;
    const bulbContainer = document.getElementById('bulbContainer');
    bulbContainer.innerHTML = '';

    for (let i = 0; i < numBulbs; i++) {

      const bulbDiv = document.createElement('div');
      bulbDiv.classList.add('bulb');
      bulbDiv.id = 'bulb-' + i;

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = 'check-' + i;
      checkbox.onchange = function() {
        toggleBulb(i);
      };

      bulbContainer.appendChild(bulbDiv);
      bulbContainer.appendChild(checkbox);
    }
  }

  function toggleBulb(index) {
    const bulb = document.getElementById('bulb-' + index);
    const checkbox = document.getElementById('check-' + index);

    if (checkbox.checked) {
      bulb.classList.add('on');
    } else {
      bulb.classList.remove('on');
    }
  }