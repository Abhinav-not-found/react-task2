import { useState } from "react"
import Card from "../components/ui/card"

const Product = () => {
  const [prodData, setProdData] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      price: 1999,
      category: "Electronics",
      image:
        "https://www.gonoise.com/cdn/shop/files/1-3_result.webp?v=1771479107",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 2999,
      category: "Gadgets",
      image:
        "https://www.gonoise.com/cdn/shop/files/1_64a47a47-00f7-4e58-ac9f-8544e664bf77.png?v=1763700735",
    },
    {
      id: 3,
      name: "Mechanical Keyboard",
      price: 4499,
      category: "Computer Accessories",
      image:
        "https://kreo-tech.com/cdn/shop/files/Frame_1000007428.png?v=1772445307&width=1000",
    },
    {
      id: 4,
      name: "Drawing Tablet",
      price: 6999,
      category: "Art Tools",
      image: "https://m.media-amazon.com/images/I/51LxC0OwABL._SL1500_.jpg",
    },
    {
      id: 5,
      name: "Bluetooth Speaker",
      price: 1599,
      category: "Audio",
      image: "https://m.media-amazon.com/images/I/81MjIZM2H9L._SL1500_.jpg",
    },
  ])
  const removeProd = (id) => {
    const filteredProduct = prodData.filter((i) => i.id !== id)
    setProdData(filteredProduct)
  }
  return (
    <div className='w-full'>
      {prodData.length === 0 ? (
        <p className='text-center mt-10'>No products</p>
      ) : (
        <div className='px-10 pt-4 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-y-5'>
          {prodData.map((i) => {
            return <Card key={i.id} data={i} fn={removeProd} />
          })}
        </div>
      )}
    </div>
  )
}

export default Product
