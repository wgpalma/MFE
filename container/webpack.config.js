const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
module.exports = {
  mode: "development",
  devServer: {
    port: 8080,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container", //not used, added for clarity. Only needed for remotes
      remotes: {
        //list projects that the container can search to get additional code
        products:
          /* load the file at the listed url if anything in container has an import like: import abc from 'products'*/
          "products@http://localhost:8081/remoteEntry.js", //<== products(Related to the name properti in the products webpack config gile) @http://localhost:8081/remoteEntry.js(URL for the remoteEntry file)
        cart: "cart@http://localhost:8082/remoteEntry.js",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
