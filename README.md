# Node 04 Cars Table

This project uses Node.js, Express, HTML, and JavaScript to display and manage a table of cars.

## Features

- Display cars in a table
- Delete cars
- Update cars
- Automatically refresh the table after changes

## How It Works

When the page loads, JavaScript sends a GET request to `/cars`.

The Node.js server responds with a JSON array of cars.

JavaScript loops through the array and creates table rows dynamically.

## Delete Function

Each row contains a delete button.

When the button is clicked:

1. JavaScript sends a DELETE request to `/cars/:id`
2. The server removes the matching car
3. The table reloads automatically

## Update Function

Each row also contains an update button.

When clicked:

1. The user enters new values using prompts
2. JavaScript sends a PUT request to `/cars/:id`
3. The server updates the car information
4. The table reloads automatically
## Screenshots

### Cars Table

![Cars Table](screenshots/cars-table.png.png)

### Updated Car

![Updated Car](screenshots/cars-table.update.png.png)

### Deleted Car

![Deleted Car](screenshots/cars-table.delete.png.png)
