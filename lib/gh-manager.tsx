const isProd = process.env.NODE_ENV === "production";

export function getLink(path: string) {
    return isProd ? `website/${path}`: path;
}