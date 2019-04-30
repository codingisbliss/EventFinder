How to run the app In postmaster:

for /register page select "POST" =>
In Body select -> (x-www-form-urlencoded) and type following keys:
1."email" - enter your email id.
2."passwd" - enter the password
3. "collectionName" - Enter any one collection Name from dropdown/other:
 ["Arts & Theatre", "Film", "Miscellaneous", "Music", "Sports", "Undefined","Donation", "Event Style", "Group", "Individual", "Merchandise", "Nonticket", "Parking", "Transportation", "Upsell", "Venue Based"]
 4. "genre" - Enter any one genre for collections like for "music" it can have following values:
[R&B,Hip-Hop/Rap,Comedy,Classical,Jazz,Foreign,Dance/Electronic ,Comedy ]


for /login page select "GET" =>

In Body select -> (x-www-form-urlencoded):

1. "email" -> your email emailId which was registered
2. "passwd" -> password for rmailId used.

 for /getEvents select "GET" =>

 You need to use /login before acessing this endpoint else it will respond with "no Authorization" message

for /setPreferences select "POST" =>
In Body select -> (x-www-form-urlencoded) and use following keys:

1. "collectionName" - enter the collection you want to update your preference.
2. "genre" - Enter new genre 

Why use Nodejs?

Apart from Node I had option of using Django and PHP, so I selected this FRamework because:
1. Its asynchronous and stateless plaform that can handle multiple request easily with better performance and reliaility.
2. A better community support.
3. Wanted to learn new language and enhance my skills. 

Why  use lowdb ?
1. I favoured this type of database because they have high promise for CRUD operation on Database.
2. Better than SQLite because our app doesnot require lot on transactional requests.
3. Equally good with CoucheDB, less complex than MongoDB
my Design for challenge:





