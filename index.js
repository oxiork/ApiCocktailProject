import express from "express";
import axios from "axios";


const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
      const result = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
      const cocktail = result.data.drinks[0]; 
  
      res.render("index.ejs", {
        cocktail: cocktail.strDrink,         
        cocktailImg: cocktail.strDrinkThumb  
      });
    } catch (error) {
      console.log(error.response ? error.response.data : error.message);
      res.status(500).send("An error occurred while fetching cocktail data.");
    }
  });

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });
      