const TerserPlugin = require("terser-webpack-plugin");

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
        public: { url: "/", static: true },
        src: { url: "/" },
    },
    routes: [
        {
            match: "routes",
            src: ".*",
            dest: "/index.html",
        },
    ],
    exclude: ["**/.vscode/**/*", "package.json", "LICENSE", "snowpack.config.js", "tsconfig.json", "yarn.lock"],
    plugins: [
        "@snowpack/plugin-typescript",
        [
            "@snowpack/plugin-sass",
            {
                sourceMap: false,
            },
        ],
        [
            "@snowpack/plugin-webpack",
            {
                /** @param {import("webpack").Configuration} config */
                extendConfig: (config) => {
                    config.optimization = {
                        minimize: true,
                        minimizer: [new TerserPlugin()],
                    };
                    return config;
                },
            },
        ],
    ],
    packageOptions: {},
    devOptions: {},
    buildOptions: {},
};
