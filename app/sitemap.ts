import type { MetadataRoute } from "next";
import { careerRoles } from "./experience/roles";
const base = "https://eastokyo.com";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/about", "/experience", "/portfolio", "/resume", "/meeting"].map(path => ({ url: base + path, changeFrequency: "monthly" as const, priority: path === "/" ? 1 : 0.7 })).concat(
    careerRoles.map(role => ({ url: base + "/experience/" + role.slug, changeFrequency: "monthly" as const, priority: 0.6 }))
  );
}
