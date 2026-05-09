const express = require("express");
const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

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

app.get("/cars", (req, res) => {
  res.json(cars);
});

app.delete("/cars/:id", (req, res) => {
  cars = cars.filter(car => car.id !== req.params.id);
  res.json({ message: "Car deleted" });
});

app.put("/cars/:id", (req, res) => {
  const car = cars.find(car => car.id === req.params.id);

  if (!car) {
    return res.status(404).json({ message: "Car not found" });
  }

  car.brand = req.body.brand;
  car.year = req.body.year;
  car.make = req.body.make;
  car.color = req.body.color;

  res.json(car);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
