import { ImageResponse } from "next/og";
export const size={width:512,height:512};
export const contentType="image/png";
export default function Icon(){return new ImageResponse(<div style={{width:"100%",height:"100%",background:"#244c66",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:100,flexDirection:"column",color:"#f4efe6"}}><div style={{fontSize:235,fontFamily:"Georgia,serif",fontWeight:700,letterSpacing:-18,marginTop:-40}}>JS</div></div>,size)}
