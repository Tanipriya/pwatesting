// import React from 'react'

const swDev = () => {

    let swUrl= `${process.env.PUBLIC_URL}/sw.js`
  return (

    navigator.serviceWorker.register(swUrl).then((response) => {
        console.warn("res", response)
    })
  )
}

export default swDev