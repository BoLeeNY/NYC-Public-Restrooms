# NYC Public Restrooms
---
 This is a website that displays all of the free public restrooms in New York public parks.
 It fetches from a NYC API that I found here: <https://data.cityofnewyork.us/Recreation/Directory-Of-Toilets-In-Public-Parks/hjae-yuav>
 I used the [soda-lab](https://git.generalassemb.ly/wdi-nyc-lambda/soda-lab) as the template for this code.
 
## Work Progress
---
I began by looking for APIs to use. Most of the API's that I came across had request limits and/or needed keys. This API didn't need a key and didn't have a request limit (that I could find). So my next step was to fetch the data and seed my database with it. 
<br>
This next snippet of code is the function that 
1. Fetches from the API: `return fetch('https://data.cityofnewyork.us/resource/r27e-u3sy.json')`
2. Iterates over all of the data: `for (let i = 0; i < data.length; i += 1) {`
3. Sets values to empty fields: `if (!data[i].hasOwnProperty('handicap_accessible')) {
          data[i].handicap_accessible = 'none';`
4. Then saves it to the database: `parks.save(data[i]);`
```javascript
function seedParks() {
  return fetch('https://data.cityofnewyork.us/resource/r27e-u3sy.json')
    .then(checkOk)
    .then((data) => {
      for (let i = 0; i < data.length; i += 1) {
        if (!data[i].hasOwnProperty('handicap_accessible')) {
          data[i].handicap_accessible = 'none';
        }
        if (!data[i].hasOwnProperty('open_year_round')) {
          data[i].open_year_round = 'No';
        }
        parks.save(data[i]);
      }
    });
}
```
<br>
Now with my database filled, I moved on to making the controllers and views. I needed to make a full CRUD application. I started with an index function that would query the database for all of the values, then made a view to display all of that data to a webpage. I created a router next, to route the controller and view.
<br>
With one route completed, I subsequently made a find one park route, create a new park route, delete a route, and lastly an update route. After my CRUD with fully functional, I moved on to styling. 
<br>

## Dependencies Used:
---
I used a variety of middleware for this project. I used Express, node-fetch, nodemon, pg-promise, method-override, body-parser, path, ejs, bulma, and morgan.
<br>

## User Stories:
---
 1. As a user, I want to filter by location.
 2. As a user, I want to see if the restroom is open.
 3. As a user, I want to know if the restroom is handicap accessible.
 4. As a user, I want to submit a new restroom that I found.
 5. As a user, I want to edit a restroom to say it's closed.

## ERD:
---
![img_5401](https://user-images.githubusercontent.com/39596048/43738608-3ba0e752-9993-11e8-9103-5eab80b05311.JPG)

## Wireframe:
---
![img_5068](https://user-images.githubusercontent.com/39596048/43738651-5b8c79aa-9993-11e8-98fc-ed3bbf634d2a.JPG)
