const Card = ({ data, fn }) => {
  return (
    <div className='ring ring-neutral-300 rounded-2xl size-60 h-66 hover:shadow-md p-2 flex flex-col gap-2'>
      <div className='h-2/3 ring ring-neutral-300 rounded-xl'>
        <img
          src={data.image}
          alt='product_image'
          className='object-cover w-full h-full rounded-xl'
          loading='lazy'
        />
      </div>
      <div className='h-1/3 flex flex-col justify-between p-1'>
        <h2 className='text-xl'>{data.name}</h2>
        <div className='flex justify-between items-center'>
          <p>₹{data.price}</p>

          <button
            onClick={() => fn(data.id)}
            className='w-fit bg-red-600 text-white px-3 py-1 rounded-xl cursor-pointer shadow-md active:scale-95 text-sm'
            type='button'
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
