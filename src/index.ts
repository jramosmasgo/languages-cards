import app from "./app";

app.listen(app.get("port"), () => {
  console.log("Application on port", app.get("port"));
});
