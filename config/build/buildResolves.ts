import webpack from "webpack";
import {BuildOptions} from "./types/config";

export const buildResolves = (options: BuildOptions): webpack.ResolveOptions => {
    return {
        extensions: [".tsx", ".ts", ".js"],
        preferAbsolute: true,
        modules: [options.paths.src, "node_modules"],
        alias: {
            "@": options.paths.src,
        },
    };
};