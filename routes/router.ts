import { Router } from 'express';

const router = Router();

router.get('/', (req, res) =>
  res.json({
    message: 'hello from docker v2 🐳!',
  }),
);

router.get('/health', (req, res) =>
  res.status(200).json({
    message: 'Everything fine 🐳!',
  }),
);

export default router;
