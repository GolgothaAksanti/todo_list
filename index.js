const express = require("express");
const app = express();
const db = require("./models");
const PORT = process.env.PORT || 3010;
const apiRoutes = require("./routes/apiRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(apiRoutes);

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on: http://localhost:${PORT}`);
    });
});