import express from "express";
import renderPage from "./util/templateEngine.js";
import checkUser from "./util/login.js";
import fs from "fs";

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

//Paths
const loginPagePath = "./public/pages/login.html"
const frontPagePath = "./public/pages/frontpage.html";
const getStartedPagePath = "./public/pages/getStartedPage.html";
const firstServerPagePath = "./public/pages/firstServerPage.html";
const firstPagePath = "./public/pages/firstPage.html";
const restAPIPagePath = "./public/pages/restAPIPage.html";
const loadHTMLPath = "./public/pages/loadHTMLPage.html";
const fetchPagePath = "./public/pages/fetchPage.html";
const ssrPagePath = "./public/pages/ssrPage.html";

//Endpoints
//GET
app.get("/", (req, res) => {
    res.send(fs.readFileSync(loginPagePath).toString());
});

app.get("/frontpage", (req, res) => {
    res.send(renderPage(frontPagePath, "Frontpage"));
});

app.get("/getStarted", (req, res) => {
    res.send(renderPage(getStartedPagePath, "Get Started!"));
});

app.get("/firstServer", (req, res) => {
    res.send(renderPage(firstServerPagePath, "First Server"));
});

app.get("/restAPI", (req, res) => {
    res.send(renderPage(restAPIPagePath, "REST API"));
});

app.get("/firstPage", (req, res) => {
    res.send(renderPage(firstPagePath, "First Page"));
});

app.get("/loadHTML", (req, res) => {
    res.send(renderPage(loadHTMLPath, "Load HTML"));
});

app.get("/fetch", (req, res) => {
    res.send(renderPage(fetchPagePath, "Fetch"));
});

app.get("/ssr", (req, res) => {
    res.send(renderPage(ssrPagePath, "SSR"));
});

//POST
app.post("/login", (req, res) => {
 if(checkUser(req.body.username,req.body.password)) {
    res.send(renderPage(frontPagePath, "Frontpage"));
 }  
});  

app.post('/yourPage', (req, res) => {
    const title = req.body.title;
    const h1 = req.body.h1;
    const paragraph = req.body.p;
    const html = `<html>
                    <head>
                      <title>${title}</title>
                    </head>
                    <body>
                      <h1>${h1}</h1>
                      <p>${paragraph}</p>
                      <a href="/firstPage"><button>Return</button>
                    </body>
                  </html>`;
    res.send(html);
  });


//PORT
const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log("Server is running on port: " + PORT);
});