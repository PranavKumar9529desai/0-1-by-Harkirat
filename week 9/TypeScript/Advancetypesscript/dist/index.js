"use strict";
const NewUser = {
    username: "Pranav"
};
const PartailUser = {
    username: "new name",
    lastname: "Desai"
};
const newUserSet = {
    1: { id: "1", username: "pranav" },
    2: { id: "1", username: "nilesh" },
};
const mapSet = new Map();
// Add users to the map using .set
mapSet.set('abc123', { id: 'abc123', username: 'John Doe' });
mapSet.set('xyz789', { id: 'xyz789', username: 'Jane Doe' });
const handleEvent = (event) => {
    console.log(`Handling event: ${event}`);
};
handleEvent('click'); // OK
