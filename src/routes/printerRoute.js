const printerController = require("../controllers/printerController");

const printerRoute = require("express").Router();

printerRoute.get("/", printerController.getPrinters);

printerRoute.get("/:id", printerController.getPrinter);

printerRoute.post("/", printerController.createPrinter);

printerRoute.put("/:id", printerController.updatePrinter);

printerRoute.delete("/:id", printerController.deletePrinter);

module.exports = printerRoute;