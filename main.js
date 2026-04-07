import express from 'express';
import router from './routes/router.js';
const app = express();
const port = process.env.PORT || 4000;
app.use('/', router);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=main.js.map