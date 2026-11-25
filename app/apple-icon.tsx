import { ImageResponse } from "next/og";
export const size={width:180,height:180};
export const contentType="image/png";
export default function AppleIcon(){return new ImageResponse(<div style={{width:"100%",height:"100%",background:"#244c66",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:32,flexDirection:"column",color:"#f4efe6"}}><div style={{fontSize:90,fontFamily:"Georgia,serif",fontWeight:700,letterSpacing:-8,marginTop:-18}}>JS</div></div>,size)}
