import { ImageResponse } from "next/og";
export const runtime="edge";
export async function GET(){return new ImageResponse(<div style={{width:"100%",height:"100%",background:"#244c66",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:36,flexDirection:"column",color:"#f4efe6"}}><div style={{fontSize:88,fontFamily:"Georgia,serif",fontWeight:700,letterSpacing:-7,marginTop:-15}}>JS</div></div>,{width:192,height:192})}
