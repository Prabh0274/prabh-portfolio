/*Student-name - prabhjot singh, student id - 301273101*/
const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("views"));
app.use(express.static("public"));
app.set("view engine", "ejs");
// this section below is rendering and bringing the ejs file and sending text using ejs templating
app.get("/", (req, res) =>
    res.render("home", { headingPage: " Prabh's Portfolio Website" })
);
app.get("/about", (req, res) =>
    res.render("about", { headingPage: "Hello Prabhjot singh" })
);
app.get("/project", (req, res) =>
    res.render("project", { headingPage: " My Projects" })
);
app.get("/services", (req, res) =>
    res.render("services.ejs", { headingPage: "Services we Offered" })
);
app.get("/contact", (req, res) =>
    res.render("contact", { headingPage: "Contact Us" })
);
app.listen(process.env.PORT || port, () =>
    console.log(`Example app listening on port ${port}!`)
);