import React from 'react'
import { ArModelViewer } from './common'
import iphone_14_pro_max_free_model from './common/webxr/iphone_14_pro_max_free_model.glb'

const TestAr = () => {
    const data = [
        {
            id: 1,
            name: "Nike Air Zoom Pegasus 36",
            company: "Nike",
            price: "₹2,000",
            poster: "nike_air_zoom_pegasus_36.webp",
            model: iphone_14_pro_max_free_model,
            placement: "floor",
            hotspots: [
                {
                    id: 1,
                    name: "Strong Lace",
                    position: "-0.1063310426762897m 0.20027422684293655m -0.08258775633216421m",
                    normal: "-0.26661702648359775m 0.806294572785741m -0.5280193396887126m",
                },
                {
                    id: 2,
                    name: "The Back",
                    position: "-0.026194182109342545m -0.13081265627543276m 0.9176077618163481m",
                    normal: "-0.7479393618613397m 0.44706899451638427m 0.49062819437998184m",
                },
                {
                    id: 3,
                    name: "Nike",
                    position: "0.291398379450142m -0.08019714497152448m 0.14913965649418007m",
                    normal: "0.9929268112233068m -0.08999604391623818m 0.07744068461307795m",
                }
            ]
        }
    ]
  return (
    <div>
        <ArModelViewer name={data[0].name} company={data[0].company} price={data[0].price} poster={data[0].poster} model={data[0].model} />
    </div>
  )
}

export default TestAr