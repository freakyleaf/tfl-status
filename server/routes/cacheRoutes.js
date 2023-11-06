import apicache from 'apicache';
import express from 'express';

const router = express.Router();

router.get('/index', (req, res) => {
  res.json(apicache.getIndex());
});

router.get('/performance', (req, res) => {
  res.json(apicache.getPerformance());
});

export default router;
