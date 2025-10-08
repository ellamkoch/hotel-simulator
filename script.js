//Checkin Form variables
const checkinForm = document.getElementById('checkinForm');
const guestName = document.getElementById('guestName');
const roomNumber = document.getElementById('roomNumber');
const stayDuration = document.getElementById('stayDuration');
const errorMessage = document.getElementById('errorMessage');

// Guest List variables
const guestListCards = document.getElementById('guestListCards');
const guestListEmpty = document.getElementById('guestListEmpty');
const guestListCount = document.getElementById('guestListCount');
const guestListCountValue = document.getElementById('guestListCountValue');


// declaring states possible - these start empty as it'll be initialized later
const guests = [];  

//Constructors

// Guest constructor function
function Guest(name, room, duration) {
    this.name = name;
    this.room = room;
    this.duration = duration;
}

 // Function to show checked in guests
function checkedInGuests() {
    guestListCards.innerHTML = '';

    if (guests.length === 0) { // checks to see if the array is empty
        guestListEmpty.style.display = '';     // if no guests are checked in, this is show. visible by default
        guestListCount.style.display = 'none'; // keeps the count hidden for when no guests are checked in. 
        guestListCountValue.textContent = '0';
        return; // nothing to show as there are no changes from what is on the page by default.
    } else {
        guestListEmpty.style.display = 'none'; // hides guestListEmpty message once we get a guest checked in
        guestListCount.style.display = 'block';     // shows guestList Count in html once we have at least 1 guest checked in. set to none in CSS as default.
        guestListCountValue.textContent = (guests.length); // puts the number of guests in the span
    }
// Builds a card for each checked in guest
    guests.forEach((guest) => { // loops through the array and runs the function once per guest
        const guestCard = document.createElement('div');// creates a div to put in the guest info of those checked in
        guestCard.className = 'guest_card'; // name of the div created
        guestCard.setAttribute('role', 'listitem'); //sets Aria role and declares it a list for screen readers in the html when the div is put in

    // inserts the guest card with its html and styles listed below in the page once a guest is checked in
    guestCard.innerHTML = ` 
        <h3 class="guest_card_title">${guest.name}</h3>
        <p class="guest_card_text">Room: ${guest.room}</p>
        <p class="guest_card_text">Stay: ${guest.duration} days</p>
    `;
    // attaches created guest card to the end of the guest list section
    guestListCards.appendChild(guestCard);
    });
}

// Checkin Guest Form Event Listener
checkinForm.addEventListener('submit', function (e) {
    e.preventDefault();// prevents page refresh on submit

    // Reads current input values
    const name = guestName.value.trim(); //returns guest name for list and trims any extra spaces
    const room = parseInt(roomNumber.value); // returns the assigned room number for the guest list
    const duration = parseInt(stayDuration.value); // returns the stay duration for the guest list

    // Check if room is already occupied
    const roomOccupied = guests.some(guest => guest.room === parseInt(room));

        if (roomOccupied) { // sets error message so the div isn't empty and makes it visible
            errorMessage.textContent = 'That room is occupied currently. Please choose a different room.';
            errorMessage.style.display = 'block'; // displays in block and styles as indicated in css
            return;
        }
        // hides error message, adds guest, and updates guest list
        errorMessage.style.display = 'none';
        guests.push(new Guest(name, parseInt(room), parseInt(duration))); // pushes the new Guest to the guest list and creats card based on constructor above. 

        checkedInGuests(); // rebuilds the list from the guest array

        // Clears form
        e.target.reset();
        
});

// Initial calling of the checkedInGuests function. Shows empty on initial loading of page.
checkedInGuests();