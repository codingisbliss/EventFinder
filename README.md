---
description: code is written in node.js which uses lowdb
---

# EventFinder

## Dependencies required

Following packages required to run this code:

1. [node.js](https://nodejs.org/en/)
2. [postman](https://www.getpostman.com/downloads/)
3. [body-parser](https://www.npmjs.com/package/body-parser)
4. [bcrypt](https://www.npmjs.com/package/bcrypt)
5. [lowd](https://github.com/typicode/lowdb)
6. [express](https://expressjs.com/en/starter/installing.html)

## Usage

Ignore README.txt and SUMMARY.md 

clone the code from git 

```text
git clone https://github.com/codingisbliss/EventFinder.git
```

Or if you don't have git  installed in your system use [this](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) or download zip from [here](https://drive.google.com/open?id=1Yg92t8AQO-3uXkthk_hXdsXGPQP5-muY).

Start node server inside EventFinder  directory

```text
node server.js
```

go to postman

* **/register** select "POST"

In Body select -&gt; \(x-www-form-urlencoded\) and type following keys:

```c
"email" - enter your email id.
"passwd" - enter the password
"collectionName" - Enter any one collection Name from dropdown/other:
 ["Arts & Theatre", "Film", "Miscellaneous", "Music", "Sports", "Undefined","Donation", "Event Style", "Group", "Individual", "Merchandise", "Nonticket", "Parking", "Transportation", "Upsell", "Venue Based"]
"genre" - Enter any one genre for collections like for "music" it can have following values:
[R&B,Hip-Hop/Rap,Comedy,Classical,Jazz,Foreign,Dance/Electronic ,Comedy ]
```

* **/login** select "GET" 

In Body select -&gt; \(x-www-form-urlencoded\) and type following keys:

```c
"email" - your email emailId which was registered
"passwd" - password for emailId used.
```

* **/getEvents** select "GET"

You need to use /login before accessing this endpoint else it will respond with "no Authorization" message.

Output is given in console with error if any.

* **/setPreferences** select "POST" 

In Body select -&gt; \(x-www-form-urlencoded\) and use following keys:

```c
"collectionName" - enter the collection you want to update your preference.
"genre" - Enter new genre
```

## Why Node.js?  <a id="why-node-js"></a>

Apart from Node I had option of using Django and PHP, so I selected this Framework because:‌

1. Its asynchronous and stateless platform that can handle multiple request easily with better performance and reliability.
2. A better community support.
3. Wanted to learn new language and enhance my skills.

## Why low db?  <a id="why-low-db"></a>

I favored this type of database because :‌

1. It has high promise for CRUD operation on Database. 
2. Better than SQLite because our app doesn't require lot on transnational requests.
3. Equally good with Couchbase, and less complex than MongoDB .

## Implementation details

![design of my code](.gitbook/assets/untitled-diagram.jpg)

## Database Design

```text
{
    profile :[
    {
        "pid" : unique String
        "email":string
        "password": encrypted String
        "classificationName":String
        "genreID" : String
    }
    ],
    //loaded as default in database
    "classification": {
    "Music": {
      "R&B": "KnvZfZ7vAee",
      "Hip-Hop": "KnvZfZ7vAv1",
      "Rap": "KnvZfZ7vAv1",
      "Comedy": "KnvZfZ7vAe1",
      "Classical": "KnvZfZ7v7nJ",
      "Jazz": "KnvZfZ7vAvE",
      "Foreign": "KnvZfZ7vAk1",
      "Dance": "KnvZfZ7vAvF",
      "Electronic": "KnvZfZ7vAvF"
    },
    "Film": {
      "Horror": "FnvZfZ7vAee",
      "Action": "FnvZfZ7vAv1",
      "Romance": "FnvZfZ7vAv1"
    }
  }
}
```

## TODO

1. In database, User could added with critical information like email Id, password and id and it profile information like collectionName, genreId could be stored separately to ensure security.
2. I have passed email Id in session cookie which not secured. "pid"  could be used instead, however it add more request to server.
3. print output in postman from /getEvent instead of console.

