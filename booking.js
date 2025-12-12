/* Booking page script
   Implements:
   - day selection (Mon-Fri) toggling with `.clicked` class
   - clear selected days
   - rate selection: full ($35 default) and half ($20)
   - calculation of weekly cost and display in #calculated-cost
*/

document.addEventListener('DOMContentLoaded', function() {
  var day_ids = ['monday','tuesday','wednesday','thursday','friday'];
  var day_elements = day_ids.map(function(id) { return document.getElementById(id); }).filter(Boolean);
  var clear_button = document.getElementById('clear-button');
  var full_btn = document.getElementById('full');
  var half_btn = document.getElementById('half');
  var cost_el = document.getElementById('calculated-cost');

  // state
  var daily_rate = 35; // default full day
  var selected_days = new Set();

  function recalc_total() {
    var total = selected_days.size * daily_rate;
    if (cost_el) cost_el.innerHTML = String(total);
  }

  // handle clicking a day: toggle selected state
  day_elements.forEach(function(day_el) {
    day_el.addEventListener('click', function() {
      var id = day_el.id;
      if (selected_days.has(id)) {
        selected_days.delete(id);
        day_el.classList.remove('clicked');
      } else {
        selected_days.add(id);
        day_el.classList.add('clicked');
      }
      recalc_total();
    });
  });

  // clear days
  if (clear_button) {
    clear_button.addEventListener('click', function() {
      selected_days.clear();
      day_elements.forEach(function(d) { d.classList.remove('clicked'); });
      recalc_total();
    });
  }

  // rate buttons
  function set_rate(rate) {
    daily_rate = rate;
    if (rate === 35) {
      full_btn && full_btn.classList.add('clicked');
      half_btn && half_btn.classList.remove('clicked');
    } else {
      half_btn && half_btn.classList.add('clicked');
      full_btn && full_btn.classList.remove('clicked');
    }
    recalc_total();
  }

  if (full_btn) {
    full_btn.addEventListener('click', function() { set_rate(35); });
  }

  if (half_btn) {
    half_btn.addEventListener('click', function() { set_rate(20); });
  }

  // initialize default state: full selected
  set_rate(35);
  recalc_total();
});
