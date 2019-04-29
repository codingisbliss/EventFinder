---
description: Start the Node Server and then use Postmaster
---

# Usage

Start node server 

```text
node server.js    
```

go to postmaster 

* /register select "POST"

In Body select -&gt; \(x-www-form-urlencoded\) and type following keys:

```text
"email" - enter your email id.
"passwd" - enter the password
"collectionName" - Enter any one collection Name from dropdown/other:
 ["Arts & Theatre", "Film", "Miscellaneous", "Music", "Sports", "Undefined","Donation", "Event Style", "Group", "Individual", "Merchandise", "Nonticket", "Parking", "Transportation", "Upsell", "Venue Based"]
"genre" - Enter any one genre for collections like for "music" it can have following values:
[R&B,Hip-Hop/Rap,Comedy,Classical,Jazz,Foreign,Dance/Electronic ,Comedy ]
```

*  /login select "GET" 

In Body select -&gt; \(x-www-form-urlencoded\):

```text
"email" - your email emailId which was registered
"passwd" - password for emailId used.
```

* /getEvents select "GET"

You need to use /login before accessing this endpoint else it will respond with "no Authorization" message.

* /setPreferences select "POST" 

In Body select -&gt; \(x-www-form-urlencoded\) and use following keys:

```text
"collectionName" - enter the collection you want to update your preference.
"genre" - Enter new genre 
```

