const express = require("Express");
const ejs = require("ejs");
const app = new express();

app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded());

app.set("view engine", "ejs");


const homeContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget malesuada dui. Nunc sodales ipsum sit amet erat ullamcorper, id portanulla vehicula. Aliquam porttitor vel tellus sit amet finibus. Nunc sem libero, consectetur vel ullamcorper ac, egestas sit amet metus. Nulladignissim   gravida   ex,   in   molestie   urna   tempor   faucibus.   Suspendisse   maximus   nisi   nibh,   ultricies   porta   augue   sollicitudin   eu.Pellentesque   consequat   vitae   ipsum   ut   accumsan.   Integer   lobortis   nibh   ut   rhoncus   fringilla.   Integer   vulputate   ipsum   eu   lectuscondimentum elementum. Fusce eget purus eget purus laoreet suscipit laoreet non nunc."
const contactContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget malesuada dui. Nunc sodales ipsum sit amet erat ullamcorper, id portanulla vehicula. Aliquam porttitor vel tellus sit amet finibus. Nunc sem libero, consectetur vel ullamcorper ac, egestas sit amet metus. Nulladignissim   gravida   ex,   in   molestie   urna   tempor   faucibus.   Suspendisse   maximus   nisi   nibh,   ultricies   porta   augue   sollicitudin   eu.Pellentesque   consequat   vitae   ipsum   ut   accumsan.   Integer   lobortis   nibh   ut   rhoncus   fringilla.   Integer   vulputate   ipsum   eu   lectuscondimentum elementum. Fusce eget purus eget purus laoreet suscipit laoreet non nunc."
const aboutContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget malesuada dui. Nunc sodales ipsum sit amet erat ullamcorper, id portanulla vehicula. Aliquam porttitor vel tellus sit amet finibus. Nunc sem libero, consectetur vel ullamcorper ac, egestas sit amet metus. Nulladignissim   gravida   ex,   in   molestie   urna   tempor   faucibus.   Suspendisse   maximus   nisi   nibh,   ultricies   porta   augue   sollicitudin   eu.Pellentesque   consequat   vitae   ipsum   ut   accumsan.   Integer   lobortis   nibh   ut   rhoncus   fringilla.   Integer   vulputate   ipsum   eu   lectuscondimentum elementum. Fusce eget purus eget purus laoreet suscipit laoreet non nunc."

let listTitle = [];
let listItem = [];

app.get("/", (req, res) => {
    res.render("home", { homeContent: homeContent, listTitle: listTitle, listItem: listItem });
});

app.get("/contact", (req, res) => {
    res.render("contact", { contactContent: contactContent });
});

app.get("/about", (req, res) => {
    res.render("about", { aboutContent: aboutContent });
});

app.get("/compose", (req, res) => {
    res.render("compose");
});

app.post("/", (req, res) => {
    let itemTitle = req.body.newItemTitle;
    let itemContent = req.body.newItemContent;
    listTitle.push(itemTitle);
    listItem.push(itemContent);
    res.redirect("/");
});


app.listen(3000, () => {
    console.log("Funcionando");
});