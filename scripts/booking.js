/* Booking page script
   Implements:
   - day selection (Mon-Fri) toggling with `.clicked` class
   - clear selected days
   - rate selection: full ($35 default) and half ($20)
   - calculation of weekly cost and display in #calculated-cost
*/

document.addEventListener('DOMContentLoaded', () => {
  const dayIds = ['monday','tuesday','wednesday','thursday','friday'];
  const dayElements = dayIds.map(id => document.getElementById(id)).filter(Boolean);
  const clearButton = document.getElementById('clear-button');
  const fullBtn = document.getElementById('full');
  const halfBtn = document.getElementById('half');
  const costEl = document.getElementById('calculated-cost');

  // state
  let dailyRate = 35; // default full day
  const selectedDays = new Set();

  function recalc() {
    const total = selectedDays.size * dailyRate;
    if (costEl) costEl.innerHTML = String(total);
  }

  // handle clicking a day: toggle selected state
  dayElements.forEach(el => {
    el.addEventListener('click', () => {
      const id = el.id;
      if (selectedDays.has(id)) {
        selectedDays.delete(id);
        el.classList.remove('clicked');
      } else {
        selectedDays.add(id);
        el.classList.add('clicked');
      }
      recalc();
    });
  });

  // clear days
  if (clearButton) {
    clearButton.addEventListener('click', () => {
      selectedDays.clear();
      dayElements.forEach(d => d.classList.remove('clicked'));
      recalc();
    });
  }

  // rate buttons
  function setRate(rate) {
    dailyRate = rate;
    if (rate === 35) {
      fullBtn && fullBtn.classList.add('clicked');
      halfBtn && halfBtn.classList.remove('clicked');
    } else {
      halfBtn && halfBtn.classList.add('clicked');
      fullBtn && fullBtn.classList.remove('clicked');
    }
    recalc();
  }

  if (fullBtn) {
    fullBtn.addEventListener('click', () => setRate(35));
  }

  if (halfBtn) {
    halfBtn.addEventListener('click', () => setRate(20));
  }

  // initialize default state: full selected
  setRate(35);
  recalc();
});
