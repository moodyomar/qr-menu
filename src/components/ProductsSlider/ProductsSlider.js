import './ProductsSlider.css'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'


const ProductsSlider = () => {

    const items = [
        {
            name: "Choclate Cake",
            description: "Probably the most random thing you have ever seen!",
            image:"https://assets.woolworthsstatic.co.za/eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvY29udGVudC9sYW5kaW5nX3BhZ2VzL0Zvb2RfMjAyMC9Gb29kX01vYmlsZV9XZWVrMTdfTGlzdGluZ0Jhbm5lcjAxLmpwZyJ9.jpg?&q=75"
        },
        {
            name: "Strawberry Cake",
            description: "Hello World!",
            image:"https://assets.woolworthsstatic.co.za/eyJidWNrZXQiOiJ3dy1vbmxpbmUtaW1hZ2UtcmVzaXplIiwia2V5IjoiaW1hZ2VzL2VsYXN0aWNlcmEvY29udGVudC9sYW5kaW5nX3BhZ2VzL0Zvb2RQcm9tbzIxL1dpbnRlckxhbmRGZHNfTW9iaWxlX1dlZWs0NF9MaXN0QmFubmVyMDQuanBnIn0.jpg?&q=75"
        },
        {
            name: "Cafe and Desert",
            description: "Hello World!",
            image:"https://cdn.shopify.com/s/files/1/0362/3508/3909/files/LF_Shopify_x200.png?v=1614294630"
        }
    ]

    return (

        <div className='ProductsSlider' style={{marginTop:"50px"}}>
            <p >Fresh, healthy and delicious!</p>
            <Carousel animation='slide'>
                {
                    items.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
        </div>

    )
}

const Item = (props) =>
{
    return (
        <Paper>
            <img src={props.item.image} alt="" />
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}


export default ProductsSlider