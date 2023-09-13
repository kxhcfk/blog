import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
    const {isDev} = options;
    
    const fileLoader: webpack.RuleSetRule = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: "file-loader",
            },
        ],
    };
    
    const svgLoader: webpack.RuleSetRule = {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    };
    
    // If not used TS - add babel-loader
    const typescriptLoader: webpack.RuleSetRule = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };
    
    const cssLoader: webpack.RuleSetRule = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resourcePath: string) => resourcePath.includes(".module."),
                        localIdentName: isDev
                            ? "[path][name]__[local]"
                            : "[hash:base64:8]",
                    },
                },
            },
            "sass-loader",
        ],
    };
    
    return [
        fileLoader,
        svgLoader,
        typescriptLoader,
        cssLoader,
    ];
};