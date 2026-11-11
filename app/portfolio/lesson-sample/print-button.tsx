"use client";
export default function PrintSampleButton() {
  return <button className="button-primary" type="button" onClick={() => window.print()}>Print / save as PDF <span aria-hidden="true">↓</span></button>;
}
