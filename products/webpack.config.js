const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "products", // more on this 'name' in
      filename: "remoteEntry.js", // lista de archivos disponibles para este proyecto=== sets the name of the manifest file. leave it as 'remote entry.js' unless you have got a good reason to change it
      exposes: {
        "./ProductsIndex": "./src/bootstrap", // aliases filenames
      },
      //  shared: ["faker"], //se colocan las dependencias que estan similares en otras microFrontends para no cargarlas dos veces  -- sirve pero re instancia la libreria
      shared: {
        faker: {
          singleton: true, // con esto solo tendremos una copia de faker sin importar que -- aunque las versiones de faker sean distintas en el con lo compartido
        },
      },
    }),
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
  ],
};
