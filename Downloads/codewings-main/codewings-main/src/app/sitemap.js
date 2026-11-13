import { site } from "../lib/site";

const lastModified = new Date("2026-11-12T00:00:00.000Z");
const routes = ["", "/about", "/services", "/projects", "/contact"];

export default function sitemap() {
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified,
  }));
}
