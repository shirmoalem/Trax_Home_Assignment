# Trax_Home_Assignment

I used ExpressJS.

My contacts item includes:
fullName, email and phone.

An explanation about the routes:

1)Route for Hi : http://localhost:3000/api/contacts/whos-there

2)Route for getting all the contacts : http://localhost:3000/api/contacts/get-all-contacts

3)Route for adding a new contact : http://localhost:3000/api/contacts/add-new-contact
  A Json example in the request:
    {
      "fullName" : "Rotem Cohen",
      "email" : "rotemcohen@gmail.com",
      "phone" : "052-3695457"
    }
    
4)Route for finding a contact by name : http://localhost:3000/api/contacts/get-contact-by-name/Shir Moalem


I was create an Array that contain 4 contacts that I chose. in Contacts I wrote my contacts array. in app.js there are the setting of the server.
in route/api/contacts.js I wrote the routes that I was requested for the task.
