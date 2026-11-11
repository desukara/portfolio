import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
 return { name:"James Simmons | English Teaching in Tokyo",short_name:"JS Teaching",description:"James Simmons — TEFL-certified English teacher in Tokyo.",start_url:"/",scope:"/",display:"standalone",background_color:"#fff9f0",theme_color:"#192c3d",icons:[{src:"/icon.svg",sizes:"any",type:"image/svg+xml",purpose:"any"},{src:"/brand/icon-192.png",sizes:"192x192",type:"image/png",purpose:"any"},{src:"/brand/icon-512.png",sizes:"512x512",type:"image/png",purpose:"any"}],shortcuts:[{name:"Teaching Experience",short_name:"Experience",url:"/experience"},{name:"Résumé",short_name:"Résumé",url:"/resume"},{name:"Request a Meeting",short_name:"Meeting",url:"/meeting"}]};
}
