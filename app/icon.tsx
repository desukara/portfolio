import { ImageResponse } from "next/og";
export const size={width:512,height:512};
export const contentType="image/png";
export default function Icon(){return new ImageResponse(<div style={{width:"100%",height:"100%",background:"#192c3d",display:"flex",alignItems:"center",justifyContent:"center",border:"24px solid #dfaa55",borderRadius:100,flexDirection:"column",color:"#fff9f0"}}><div style={{fontSize:100,color:"#dfaa55",marginTop:5}}>◆</div><div style={{fontSize:235,fontFamily:"Georgia,serif",fontWeight:700,letterSpacing:-18,marginTop:-40}}>JS</div><div style={{fontSize:80,color:"#dfaa55",marginTop:-52}}>⌣⌣</div></div>,size)}
