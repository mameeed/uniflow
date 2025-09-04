const {defineConfig} = require("@vue/cli-service");

module.exports = defineConfig({
    transpileDependencies: true,
    // publicPath: process.env.NODE_ENV === "production" ? "/" + process.env.CI_PROJECT_NAME + "/" : "/",
    publicPath: process.env.NODE_ENV === "production" ? "/uniflow/" : "/",

    // devServer: {
    //     proxy: "https://umkamatov.gitlab.io/unisale",
    // },
    pages: {
        index: {
            entry: "/src/main.js",
            title: "Uniquest | Activate your community",
        },
    },
});
