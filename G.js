function showPlan() {
    const location = document.getElementById("locationSelect").value;
    const itinerary = document.getElementById("itinerary");
  
    let plan = '';
    if (location === "gangtok") {
      plan = `
        <h3>3-Day Itinerary for Gangtok</h3>
        <ul>
          <li><strong>Day 1:</strong> Arrival in Gangtok, visit MG Road, Hanuman Tok, and enjoy local cuisine.</li>
          <li><strong>Day 2:</strong> Explore Tsomgo Lake, Baba Mandir, and Nathula Pass (if permitted).</li>
          <li><strong>Day 3:</strong> Visit Rumtek Monastery, Namgyal Institute of Tibetology, and Banjhakri Falls before departure.</li>
        </ul>`;
    } else if (location === "darjeeling") {
      plan = `
        <h3>3-Day Itinerary for Darjeeling</h3>
        <ul>
          <li><strong>Day 1:</strong> Sunrise at Tiger Hill, Batasia Loop, and explore local markets.</li>
          <li><strong>Day 2:</strong> Enjoy Toy Train Ride, visit Himalayan Zoo, and Tea Garden tour.</li>
          <li><strong>Day 3:</strong> Explore Peace Pagoda, Rock Garden, and Ganga Maya Park.</li>
        </ul>`;
    } else {
      plan = '<p>Please select a destination from the dropdown.</p>';
    }
  
    itinerary.innerHTML = plan;
  }
  
  function handleBooking(event) {
    event.preventDefault();
    document.getElementById("confirmation").innerText = "✅ Thank you! Your booking is confirmed. We’ll contact you shortly.";
    document.querySelector("form").reset();
    return false;
  }
  