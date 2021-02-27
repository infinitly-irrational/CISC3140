Lab 2

Haitham Alnajar

Application name: myAnimeList

Description: Keep track of anime and manga by adding them to lists such was watching/reading, watched/read, plan to watch/read, etc. I will refer to either a manga or anime as an entry.

Task 1: Track and anime/manga by adding them to its respective list

- Non-technical description: In this task the user can either by searching or clicking an entry by clicking on its photo to access the page that contains information regarding that entry. In the entry page the user sees an image of the entry and below it details regarding it such as the alternative names, release date, episode number, producer, etc. To the right side of the page there is an add to list button that will display a pop up window asking which list to add the entry to. The lists can be viewed by navigating to the user profile page and clicking on which list to view.

- Technical description: when do user clicks on an entry to access it a request is sent to the server and server will see if the user can access that specific page that contains the entry if the user can access it the entries information will be retrieved from a database and sent back the user’s machine. In the entry page, the user can click the add to list button, and with the help of HTML, CSS, and JavaScript, we can program the pop-up window to display certain elements that contain methods which will add the entry to a specific list. The lists are probably stored in a dynamic data structure such as an array list. When the user adds the entry by clicking on the respective button the entry’s information that was retrieved will be added to the data structure.

- What can go wrong while completing the task: possible things that can go wrong performing this task is that the JavaScript does not work. For example, if the user click on add to list the pop-up window might not appear. Or in the pop-up window if the user clicks on add to a specific list, The entry might not be added due to an error in the code. Another thing that might go wrong is if the user clicks to navigate to the entry’s page, they might be sent to the wrong page or will get an error that that page does not exist. Another thing that can go wrong is if the data structure used to store the entries is a static one such as in already and the user’s array is full the entry will not get added

Task 2: View the seasonal anime

- Non-technical description: in this task the user can click the navigation bar at the top of the screen navigate to the Seasonal anime by clicking its respective button. In the seasonal anime page The anime or display any table like fashion three columns and a variable number of rows. In this page the user can sort the anime by using the sort button near the top of the screen. The user can then click on each anime image or name to access the anime’s information.

- Technical description: When the user clicks on the seasonal anime button at the top of the screen a request sent to the server and the seasonal anime are retrieved from the database. The request is then sent back to the user’s machine and displayed in the aforementioned fashion. When the user clicks in an anime, a request is sent to and back from the database to the user’s machine and the user then has access to the anime’s information.

- What can go wrong while completing the task: things that can go wrong is if the seasonal anime are not stored in the database and the seasonal anime chart will be empty. Another thing that can go wrong is if the user clicks on an anime to access its page, they might get an error if the link to the anime page is wrong.

Task 3: View entry based on tag (trending, popular, hot, highest rated, etc)

- Non-technical description: The user can navigate to a screen that displays either all anime or manga. The default display order is from highest to lowest rating. The user can click a button above the first entry to view all manga/anime by whatever tag they choose. For example if they choose to view the most popular anime, the screen will be render again and sorted alphabetically and any entry that has a “popular” tag will be displayed.
- Technical description: In the display anime or manga page. The user can sort the anime by a specific tag. When they user chooses to view the entry by most popular first, a request is sent to the database to retrieve all the anime that have that tag, and they will be returned to that page.
- What can go wrong while completing the task: possible things that can go wrong is if the sort button doesn’t work or retrieves the wrong list.
