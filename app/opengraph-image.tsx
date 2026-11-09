import { ImageResponse } from "next/og";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div style={{ display:"flex",width:"100%",height:"100%",background:"#153b3c",color:"#fffdf7",padding:80,flexDirection:"column",justifyContent:"center",fontFamily:"Arial,sans-serif" }}>
      <div style={{fontSize:28,letterSpacing:5,color:"#f4bf9f"}}>JAMES SIMMONS · TOKYO</div>
      <div style={{fontSize:76,fontWeight:700,marginTop:30,lineHeight:1.1}}>English Teaching Portfolio</div>
      <div style={{fontSize:30,marginTop:35,color:"#dcefe7"}}>Understand the learner. Teach with purpose.</div>
    </div>, size
  );
}
