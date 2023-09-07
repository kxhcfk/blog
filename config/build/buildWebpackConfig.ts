import webpack from "webpack";

import {buildLoaders} from "./buildLoaders";
import {buildResolves} from "./buildResolves";
import {buildPlugins} from "./buildPlugins";
import {buildDevServer} from "./buildDevServer";

import {BuildOptions} from "./types/config";

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
    const {mode, paths, isDev} = options;

    return {
        mode,
        entry: paths.entry,
        devtool: isDev ? "inline-source-map" : undefined,
        plugins: buildPlugins(options),
        resolve: buildResolves(),
        devServer: isDev ? buildDevServer(options) : undefined,
        module: {
            rules: buildLoaders(options),
        },
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
        },
    };
};