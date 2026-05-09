const express = require("express");
const app = express();

const PORT = 3000;

// lets express read json data
app.use(express.json());

// allows express to use files from public folder
app.use(express.static("public"));

// car data
let cars = [
  {
    id: "1",
    brand: "Mercedes",
    year: 2000,
    make: "300",
    color: "Blue"
  },
  {
    id: "2",
    brand: "Toyota",
    year: 1999,
    make: "Camry",
    color: "Silver"
  }
];

// get all cars
app.get("/cars", (req, res) => {
  res.json(cars);
});

// delete a car
app.delete("/cars/:id", (req, res) => {
  cars = cars.filter(car => car.id !== req.params.id);

  res.json({
    message: "Car deleted"
  });
});

// update a car
app.put("/cars/:id", (req, res) => {
  const car = cars.find(car => car.id === req.params.id);

  // check if car exists
  if (!car) {
    return res.status(404).json({
      message: "Car not found"
    });
  }

  // update values
  car.brand = req.body.brand;
  car.year = req.body.year;
  car.make = req.body.make;
  car.color = req.body.color;

  res.json(car);
});

// start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
