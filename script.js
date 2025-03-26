document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;
    const travelClass = document.getElementById('class').value;
  
    alert(`Searching for trains from ${from} to ${to} on ${date} in ${travelClass} class.`);
  });
  