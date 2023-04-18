function Error({mensaje}) {
  return (
       <div>
    <p className="bg-red-700 text-white text-center uppercase font-bold mb-3 rounded-md">
      {mensaje}
    </p>
  </div>
  )
}

export default Error