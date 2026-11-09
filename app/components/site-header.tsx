import Link from "next/link";
export default function SiteHeader({current}:{current?:string}) {
 const links=[["About","/about"],["Experience","/experience"],["Portfolio","/portfolio"],["Résumé","/resume"]];
 return <><div className="top-strip"><span>ENGLISH LANGUAGE EDUCATION</span><span>TOKYO, JAPAN</span></div><header className="site-header shell"><Link className="brand" href="/" aria-label="Homepage">TEACH<span>.</span></Link><nav aria-label="Main navigation">{links.map(([label,href])=><Link key={href} href={href} aria-current={current===href?"page":undefined}>{label}</Link>)}</nav><Link className="nav-cta" href="/meeting">Request a meeting ↗</Link></header></>;
}