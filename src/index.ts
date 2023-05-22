import app from "./app";
import DatabaseConeection from "./config/database";

DatabaseConeection();

app.listen(app.get("port"), () => {
  console.log("Application on port", app.get("port"));
});
