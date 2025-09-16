// Context para manejar el estado del carrito
import { createContext, useContext, useState, useEffect } from 'react';

const CarritoContext = createContext();

export const useCarrito = () => {
  const context = useContext(CarritoContext);
  if (!context) {
    throw new Error('useCarrito debe ser usado dentro de CarritoProvider');
  }
  return context;
};

export const CarritoProvider = ({ children }) => {
  const [productosCarrito, setProductosCarrito] = useState([]);
  const [modalCarritoAbierto, setModalCarritoAbierto] = useState(false);
  const [modalPedidoAbierto, setModalPedidoAbierto] = useState(false);

  // Cargar carrito desde localStorage al inicializar
  useEffect(() => {
    const carritoGuardado = localStorage.getItem('carrito-kuyen');
    if (carritoGuardado) {
      setProductosCarrito(JSON.parse(carritoGuardado));
    }
  }, []);

  // Guardar carrito en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem('carrito-kuyen', JSON.stringify(productosCarrito));
  }, [productosCarrito]);

  // Agregar producto al carrito
  const agregarAlCarrito = (producto, cantidad = 1, colorSeleccionado = '') => {
    const productoExistente = productosCarrito.find(
      item => item.id === producto.id && item.colorSeleccionado === colorSeleccionado
    );

    if (productoExistente) {
      setProductosCarrito(productosCarrito.map(item =>
        item.id === producto.id && item.colorSeleccionado === colorSeleccionado
          ? { ...item, cantidad: item.cantidad + cantidad }
          : item
      ));
    } else {
      setProductosCarrito([...productosCarrito, {
        ...producto,
        cantidad,
        colorSeleccionado,
        id: `${producto.id}-${colorSeleccionado || 'default'}`
      }]);
    }
  };

  // Remover producto del carrito
  const removerDelCarrito = (idProducto) => {
    setProductosCarrito(productosCarrito.filter(item => item.id !== idProducto));
  };

  // Actualizar cantidad
  const actualizarCantidad = (idProducto, nuevaCantidad) => {
    if (nuevaCantidad <= 0) {
      removerDelCarrito(idProducto);
      return;
    }
    
    setProductosCarrito(productosCarrito.map(item =>
      item.id === idProducto ? { ...item, cantidad: nuevaCantidad } : item
    ));
  };

  // Vaciar carrito
  const vaciarCarrito = () => {
    setProductosCarrito([]);
  };

  // Calcular total
  const calcularTotal = () => {
    return productosCarrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
  };

  // Obtener cantidad total de productos
  const obtenerCantidadTotal = () => {
    return productosCarrito.reduce((total, item) => total + item.cantidad, 0);
  };

  const value = {
    productosCarrito,
    modalCarritoAbierto,
    setModalCarritoAbierto,
    modalPedidoAbierto,
    setModalPedidoAbierto,
    agregarAlCarrito,
    removerDelCarrito,
    actualizarCantidad,
    vaciarCarrito,
    calcularTotal,
    obtenerCantidadTotal
  };

  return (
    <CarritoContext.Provider value={value}>
      {children}
    </CarritoContext.Provider>
  );
};

export default CarritoContext;