// Create an array of objects, each representing an event.(5-10)
const events = [
    {
      title: "Coffee Sampling",
      date: new Date("2024-03-15T10:00:00"),
      location: "KPCU Coffee Miller",
      attendees: new Set(["Martin", "Eddie", "Eddy"]),
    },
    {
      title: "Trading Exposition",
      date: new Date("2024-03-16T08:30:00"),
      location: "Exchange Building, Room 101",
      attendees: new Set(["David", "Alice", "Fridah", "Paul"]),
    },
    {
      title: "Global Market Scope",
      date: new Date("2024-03-17T08:30:00"),
      location: "VillaRosa Kempinski",
      attendees: new Set(["Gathui", "Isabel", "Mark", "Karen"]),
    },
    {
        title: "Local Market Scope",
        date: new Date("2024-03-18T09:30:00"),
        location: "JKUAT Towers",
        attendees: new Set(["Abdi", "Abdul", "Charlie"]),
      },{
        title: "Charity Fundraiser",
        date: new Date("2024-03-19T10:00:00"),
        location: "Paradise Community Center",
        attendees: new Set(["Mark", "Bob", "Simon"]),
      },{
        title: "Birthday Party",
        date: new Date("2024-03-20T12:30:00"),
        location: "Zen Gardens",
        attendees: new Set(["Abigael", "Brian", "Claire"]),
      },{
        title: "Wine Tasting",
        date: new Date("2024-03-21T20:00:00"),
        location: "Safari Park Hotel",
        attendees: new Set(["Kinyanjui", "Mwikali", "Caresha"]),
      },
  ];
  
  // Use .filter() and .map() to display events happening in the next 7 days (12)
  const today = new Date();
  const nextWeek = new Date(today);
  nextWeek.setDate(today.getDate() + 7);
  
  const upcomingEvents = events
    .filter((event) => event.date >= today && event.date <= nextWeek)
    .map((event) => {
      return {
        title: event.title,
        date: event.date.toDateString(),
        location: event.location,
        attendees: Array.from(event.attendees),
      };
    });
  
  console.log(upcomingEvents);
   
// Create a WeakMap to store event organizers (14)
const eventOrganizers = new WeakMap();

eventOrganizers.set(events[0], "Martin");
eventOrganizers.set(events[1], "David");
eventOrganizers.set(events[2], "Gathui");
eventOrganizers.set(events[3], "Abdi");
eventOrganizers.set(events[4], "Mark");
eventOrganizers.set(events[5], "Abigael");
eventOrganizers.set(events[6], "Kinyanjui");

for (const event of events ) {
  const organizer = eventOrganizers.get(event);
  console.log(`Event: ${event.title}, Organzer: ${organizer}`);
}
// Extract properties and display in a table format (16)
console.table("Event Details:");
console.table("--------------------------------------------------------------------------------");
console.table("| Title                 | Date                  | Location                     |");
console.table("--------------------------------------------------------------------------------");
for (const event of events) {
  const { title, date, location } = event;
  console.log(`| ${title.padEnd(20)} | ${date.toDateString().padEnd(20)} | ${location.padEnd(30)} |`);
}
console.log("-------------------------------------------------------------------------------");

//Create a function that adds a new attendee to an event (18)
function addAttendeeToEvent(eventTitle, attendeeName, events) {
    const event = events.find((e) => e.title === eventTitle);
    if (event) {
      event.attendees.add(attendeeName);
      console.log(`Added ${attendeeName} to ${eventTitle}.`);
    } else {
      console.log(`Event "${eventTitle}" not found.`);
    }
  }
  
  addAttendeeToEvent( "Birthday Party","Diana", events);
 
  //Create a function that converts the event array to a JSON string  (20)
  function convertEventsToJson(events) {
    const eventsWithFormattedDate = events.map((event) => {
      const formattedDate = event.date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });
      return { ...event, formattedDate };
    });
  
    return JSON.stringify(eventsWithFormattedDate, null, 2);
  }
  
  //Use the Object.keys(), Object.values(), and Object.entries() methods to display the properties and values of the first event object in the array.(22)
  const jsonEvents = convertEventsToJson(events);
  console.log(jsonEvents);
  
  const firstEvent = events[0];
  const keys = Object.keys(firstEvent);
  const values = Object.values(firstEvent);
  const entries = Object.entries(firstEvent);
  
  console.log("Properties of the First Event:");
  console.log("Keys:", keys);
  console.log("Values:", values);
  console.log("Entries:", entries);
  
  //Use the .forEach() method to iterate over the events array and console.log the title and date of each event.(24)

  console.log("\nEvent Titles and Dates:");
events.forEach((event) => {
  console.log(`Title: ${event.title}, Date: ${event.date.toDateString()}`);
});

//Implement functionality to delete events from the array using the .splice() method.(28)
const eventToDelete = "Birthday Party";
const eventIndex = events.findIndex((event) => event.title === eventToDelete);

if (eventIndex !== -1) {
  events.splice(eventIndex, 1);
  console.log(`Event "${eventToDelete}" has been deleted.`);
} else {
  console.log(`Event "${eventToDelete}" not found.`);
}
  
  // Use the .reduce() method to find the event with the most attendees.(31)

  const eventWithMostAttendees = events.reduce((maxAttendeesEvent, currentEvent) => {
    if (currentEvent.attendees.size > maxAttendeesEvent.attendees.size) {
      return currentEvent;
    }
    return maxAttendeesEvent;
  }, events[0]); 
  
  console.log(`Event with the most attendees:`);
  console.log(`Title: ${eventWithMostAttendees.title}`);
  console.log(`Number of Attendees: ${eventWithMostAttendees.attendees.size}`);
  

  