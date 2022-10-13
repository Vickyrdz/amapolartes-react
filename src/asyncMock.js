

const products =  [
    { 
        id: '1', 
        name: 'Mate Hexagonal', 
        price: 2500, 
        category: 'mate', 
        img: '/images/mate-hexag-leopardo.jpeg', 
        // img: '//images/nombredeimagen.jpg',
        stock: 15, 
        description:'Con diseño alopardado, uno de los más pedidos. Producto de algarrobo pintado a mano. Incluye bombilla.'
    },
    { id: '2', 
      name: 'Mate Huevito',  
      price: 2000, 
      category: 'mate', 
      img:'/images/mate-huevito.jpeg', 
      stock: 15, 
      description:'Con un delicado diseño de flores. Producto de algarrobo pintado a mano. Incluye bombilla.'
    },
    { id: '3', 
      name: 'Combo Flores Azules', 
      price: 4500, 
      category: 'combo', 
      img:'/images/combo-flores-azules.jpeg', 
      stock: 5, 
      description:'Combo 3 piezas: 2 cuencos de 10cm y tabla de algarrobo. Diseño pintado a mano.'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => {
                return prod.id === id
            }))
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}