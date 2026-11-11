import { ImageResponse } from "next/og";
export const size={width:180,height:180};
export const contentType="image/png";
export default function AppleIcon(){return new ImageResponse(<div style={{width:"100%",height:"100%",background:"#192c3d",display:"flex",alignItems:"center",justifyContent:"center",border:"8px solid #dfaa55",borderRadius:32,flexDirection:"column",color:"#fff9f0"}}><div style={{fontSize:38,color:"#dfaa55"}}>◆</div><div style={{fontSize:90,fontFamily:"Georgia,serif",fontWeight:700,letterSpacing:-8,marginTop:-18}}>JS</div><div style={{fontSize:28,color:"#dfaa55",marginTop:-18}}>⌣⌣</div></div>,size)}
