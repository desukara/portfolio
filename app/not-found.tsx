import Link from "next/link";
export default function NotFound() {
  return <main className="shell" style={{paddingTop:100,paddingBottom:120,minHeight:"70vh"}}>
    <span className="kicker">404 / PAGE NOT FOUND</span>
    <h1>This page has moved.</h1>
    <p className="hero-lead">EASTOKYO is now James Simmons’s English teaching portfolio.</p>
    <Link className="button-primary" href="/">Explore the teaching portfolio →</Link>
  </main>;
}
