# hotel-simulator
This is the repository for the Hotel Simulator Assignment for Week 3, Level 2, with CodeX. 

## Goal of the Assignment
Step into the role of a hotel manager and build your very own Hotel Simulator! Your mission is to create a sleek, functional web application that can handle guest check-ins, manage room assignments, and display an organized list of guests staying at your virtual hotel. As the architect of this system, you'll design a user-friendly interface and implement logic to ensure smooth operations—because no guest wants to hear, "Sorry, your room is double-booked!"

### Features
-Check-In Form with fields for Guest Name, Room Number, and Stay Duration
-Validation to ensure all fields are completed before submitting. Validation on the Room # and Stay Duration fields as well that doesn't let you enter anything but a whole number.
-Room Availability Logic — prevents two guests from sharing the same room
-Guest List Display — dynamically shows all checked-in guests as cards
-Pre-Loaded Guests — renders an initial list from a JavaScript array
-Constructor Function used to create each Guest object
-Includes a total count of all guests checked in
-Includes a message that shows if no guests are checked in. Left this in since I had it that way intially as thinking it would be a handy feature to have, but then saw the assignment requirements mentioned "prepopulating the guest list" and thought that it meant we needed to have pre-exisiting guests listed. Left the function and message in to show thought process.

### Requirements
-HTML layout includes both the Check-In Form and Guest List section
-CSS provides a clean, user-friendly design
-JavaScript handles validation, availability checks, and dynamic rendering
-No external JS libraries — only plain JavaScript
-Code is readable, commented, and follows good structure
-Final project uploaded to GitHub and deployed via GitHub Pages

## Files
- index.html
- script.js
- styles.css
- .gitignore
- README.md - this file

## Testing Checklist
- [ ] Page loads with prepopulated guests visible.
- [ ] Form blocks negative numbers, decimals, and empty fields.
- [ ] Trying to reuse a room shows the error message.
- [ ] After a valid submit, form clears and list updates without duplicates.
- [ ] No errors in the browser console.

## Accessibility Notes
Trying to keep learning about Aria, so googled some best practices and inserted them where I thought they were fitting. 

## How to Use
1. Open the live site.
2. You’ll see pre-existing guests on page load.
3. Add a new guest via the Check-In Form:
   - Guest Name (text)
   - Room Number (whole number ≥ 1)
   - Stay Duration (whole number ≥ 1)
4. If the room is already assigned, an error message appears.  
5. Once checked in successfully, the guest appears as a card below in the guest list with the entered values and the total count updates.


## GitHub links
[Link to GitHub Repository](https://github.com/ellamkoch/hotel-simulator/tree/dev)
[Link to Published page on GitHub ](https://ellamkoch.github.io/hotel-simulator/)

