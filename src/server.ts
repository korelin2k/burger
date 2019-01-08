import * as express from "express";
import * as exphbs from "express-handlebars";
import * as handlebars from "handlebars";
import router from "./controllers/burgers_controller";

const PORT = process.env.PORT || 8080;
const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

handlebars.registerHelper("ifContains", (value, options) => {
    const search: string = "http";

    if (value.includes(search)) {
      return true;
    } else {
      return false;
    }
});

handlebars.registerHelper("ifEquals", function(a, options) {
  if (a.substring(0, 4) === "http") {
    return options.fn(this);
  }

  return options.inverse(this);
});

app.use(router);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, () => {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
