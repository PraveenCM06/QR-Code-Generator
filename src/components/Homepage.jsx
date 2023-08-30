import { useState } from "react";
import QRCode from "react-qr-code";
const Homepage = () => {
    const [text, setText] = useState('');
    const handleChange = (e)=>{
      setText(e.target.value)
    }

    return (
      <body>
      <div className="content">
        <h1 className="herotext">QR Code <br/>generator </h1>
        <input type="text" onChange={(e)=>{handleChange(e)}} value={text} placeholder="type your link here"/>
      </div>
      <div className="qrcode">
        <QRCode value={text}/> 
      </div>
      </body>
);
}
 
export default Homepage;