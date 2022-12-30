import { cyberpunk_jacket, nike_air_zoom_pegasus_36 } from "../3dassets"

const topPicData = [
    {
        id: 1,
        name: "Nike Shoes",
        price: "$2650",
        poster: "https://cdn.discordapp.com/attachments/1054636645732859994/1057390285975474226/image-removebg-preview.png",
        decription: "The Nike Air Zoom Pegasus 36 is a popular running shoe that is known for its comfort, support, and durability. It features a breathable mesh upper and Zoom Air cushioning in the sole for a responsive, cushioned feel. The shoe also has a slight rocker shape in the forefoot to encourage a natural running stride and a rubber outsole for traction on a variety of surfaces. It is suitable for runners of all levels and is popular for both training and racing.",
        material: [ "Mesh", "Rubber", "Foam" ],
        model: nike_air_zoom_pegasus_36,
        placemnt: "floor",
        hotspots: [
            {
                id: 1,
                name: "Tongue holder",
                position: "0.02722531140289619m 0.24674742909248637m -0.03483274966086253m",
                normal: "-0.021876867398458802m 0.3620999834986919m 0.9318825058037508m",
            },
            {
                id: 2,
                name: "Mesh panel",
                position: "0.2985608159791915m -0.08569549356118089m 0.06280594990550298m",
                normal: "0.9924301646091194m -0.07567039931584539m 0.09672827425989118m",
            }
        ]
    },
    {
        id: 2,
        name: "Neo Jacket",
        company: "CryptoPunk",
        price: "$1250",
        poster: "https://cdn.discordapp.com/attachments/1054636645732859994/1056655985151844372/ahhhh.png",
        description: "The Cyberpunk 2077 Jacket is a stylish and trendy jacket that is made from high-quality leather. It has a button closure and a stand-up collar. It is available in a variety of colors and sizes. It is perfect for casual wear and can be worn with jeans or a pair of shorts. It is also a great gift for a friend or family member.",
        material: [ "Leather", "Polyester", "Cotton" ],
        model: cyberpunk_jacket,
        placement: "floor",
        hotspots: [
            {
                id: 1,
                name: "Button closure",
                position: "0.07188187187656739m 1.4514574166323728m 0.08786709958031445m",
                normal: "-0.021876867398458802m 0.3620999834986919m 0.9318825058037508m",
            },
            {
                id: 2,
                name: "Leather material",
                position: "-0.14273273485683724m 1.193229129751948m 0.0749232170042912m",
                normal: "-0.6750052890684157m 0.165322875775553m 0.7190522974547578m",
            }
        ]
    }
]

export default topPicData