import { ImageResponse } from "next/og";
export const runtime="edge";
export async function GET(){return new ImageResponse(<div style={{width:"100%",height:"100%",background:"#192c3d",display:"flex",alignItems:"center",justifyContent:"center",border:"9px solid #dfaa55",borderRadius:36,flexDirection:"column",color:"#fff9f0"}}><div style={{fontSize:42,color:"#dfaa55"}}>◆</div><div style={{fontSize:88,fontFamily:"Georgia,serif",fontWeight:700,letterSpacing:-7,marginTop:-15}}>JS</div><div style={{fontSize:30,color:"#dfaa55",marginTop:-18}}>⌣⌣</div></div>,{width:192,height:192})}
