const express = require('express');
const { PrismaClient } = require('@prisma/client');

const router = express.Router();
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  const vehicles = await prisma.vehicle.findMany();
  res.json(vehicles);
});

router.get('/:id', async (req, res) => {
  const vehicle = await prisma.vehicle.findUnique({
    where: { id: parseInt(req.params.id) },
  });
  res.json(vehicle);
});

module.exports = router;
