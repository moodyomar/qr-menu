import heContent from "../../json/content-hr.json"
import arContent from "../../json/content-ar.json"

const Footer = ({language}) => { 

const contentLng = language === 'Ar' ? arContent : heContent

return(

<div className='Footer' style={footerStyle}>
<p>{contentLng.devText} <a href="https://qbmedia.co.il" target="_blank" rel="noreferrer" style={footerStyle.a}>{contentLng.company}</a></p>
</div>

)
}

const footerStyle = {
    marginBottom:"56px",
    backgroundColor:"#1E1E1E",
    height:"100px",
    color:"white",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    a:{
        textDecoration:"none",
        color:"#D39F47",
        pointer:"cursor"
    }
}

export default Footer