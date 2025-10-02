import React, { useState, useMemo } from 'react';
import BotonCarritoFlotante from './BotonCarritoFlotante.jsx';
import ProductCard from './ProductCard.jsx';
import { productos } from './catalogo.js';
import Buscador from './buscador.jsx';
import Filtros from './filtros.jsx';
import ModalCarrito from './ModalCarrito.jsx';
import ModalPedido from './ModalPedido.jsx';
import { generarMensajeWhatsApp } from '../../utils/mensajes.js';

const CatalogoEstatico = () => {
  // Estados para funcionalidades
  const [filtroCategoria, setFiltroCategoria] = useState('todas');
  const [ordenamiento, setOrdenamiento] = useState('nombre');
  const [busqueda, setBusqueda] = useState('');
  const [colorSeleccionado, setColorSeleccionado] = useState('');
  const [rangoPrecios, setRangoPrecios] = useState('todos');
  
  // Estados del carrito
  const [carrito, setCarrito] = useState([]);
  const [modalCarritoAbierto, setModalCarritoAbierto] = useState(false);
  const [modalPedidoAbierto, setModalPedidoAbierto] = useState(false);
  
  // Estados del formulario de pedido
  const [datosCliente, setDatosCliente] = useState({
    nombre: '',
    email: '',
    formaPago: 'efectivo'
  });

  // Función para formatear precio
  const formatearPrecio = (precio) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0
    }).format(precio);
  };

  // Funciones del carrito
  const agregarAlCarrito = (producto) => {
    setCarrito(prev => {
      const existe = prev.find(item => item.id === producto.id);
      if (existe) {
        return prev.map(item => 
          item.id === producto.id 
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  const removerDelCarrito = (productId) => {
    setCarrito(prev => prev.filter(item => item.id !== productId));
  };

  const actualizarCantidad = (productId, nuevaCantidad) => {
    if (nuevaCantidad <= 0) {
      removerDelCarrito(productId);
      return;
    }
    setCarrito(prev => 
      prev.map(item => 
        item.id === productId 
          ? { ...item, cantidad: nuevaCantidad }
          : item
      )
    );
  };

  const calcularTotal = () => {
    return carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
  };

  const obtenerCantidadTotal = () => {
    return carrito.reduce((total, item) => total + item.cantidad, 0);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
    setModalCarritoAbierto(false);
    setModalPedidoAbierto(false);
    setDatosCliente({ nombre: '', email: '', formaPago: 'efectivo' });
  };

  // ...existing code...

  const enviarPedido = () => {
    // Validaciones mejoradas
    if (!datosCliente.nombre.trim()) return;
    if (datosCliente.nombre.trim().length < 2) return;
    if (!datosCliente.email.trim()) return;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(datosCliente.email)) return;
    if (carrito.length === 0) return;

    // Abrir WhatsApp directamente
    const url = generarMensajeWhatsApp(carrito, datosCliente);
    window.open(url, '_blank');
  };

  // Obtener categorías únicas desde catalogo.js
  const categorias = useMemo(() => {
    const categoriasUnicas = [...new Set(productos.map(p => p.categoria))];
    return [
      { id: 'todas', nombre: 'Todas las categorías' },
      ...categoriasUnicas.map(cat => ({ 
        id: cat, 
        nombre: cat.charAt(0).toUpperCase() + cat.slice(1) 
      }))
    ];
  }, []);

  // Obtener colores únicos desde catalogo.js
  const colores = useMemo(() => {
    const coloresUnicos = [...new Set(productos.flatMap(p => p.colores))];
    return coloresUnicos;
  }, []);

  // Rangos de precios
  const rangosPrecios = [
    { id: 'todos', nombre: 'Todos los precios' },
    { id: '0-2000', nombre: 'Hasta $2.000' },
    { id: '2000-5000', nombre: '$2.000 - $5.000' },
    { id: '5000-10000', nombre: '$5.000 - $10.000' },
    { id: '10000+', nombre: 'Más de $10.000' }
  ];

  // Filtrar productos
  const productosFiltrados = useMemo(() => {
    let productosFiltradosTemp = [...productos];

    // Filtrar por búsqueda
    if (busqueda.trim()) {
      productosFiltradosTemp = productosFiltradosTemp.filter(producto =>
        producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        producto.descripcion.toLowerCase().includes(busqueda.toLowerCase()) ||
        producto.categoria.toLowerCase().includes(busqueda.toLowerCase())
      );
    }

    // Filtrar por categoría
    if (filtroCategoria !== 'todas') {
      productosFiltradosTemp = productosFiltradosTemp.filter(
        producto => producto.categoria === filtroCategoria
      );
    }

    // Filtrar por color
    if (colorSeleccionado) {
      productosFiltradosTemp = productosFiltradosTemp.filter(
        producto => producto.colores.includes(colorSeleccionado)
      );
    }

    // Filtrar por precio
    if (rangoPrecios !== 'todos') {
      const [min, max] = rangoPrecios.split('-').map(Number);
      if (max) {
        productosFiltradosTemp = productosFiltradosTemp.filter(
          producto => producto.precio >= min && producto.precio <= max
        );
      } else {
        productosFiltradosTemp = productosFiltradosTemp.filter(
          producto => producto.precio >= min
        );
      }
    }

    // Ordenar productos
    switch (ordenamiento) {
      case 'precio-asc':
        return productosFiltradosTemp.sort((a, b) => a.precio - b.precio);
      case 'precio-desc':
        return productosFiltradosTemp.sort((a, b) => b.precio - a.precio);
      case 'nombre':
      default:
        return productosFiltradosTemp.sort((a, b) => a.nombre.localeCompare(b.nombre));
    }
  }, [busqueda, filtroCategoria, colorSeleccionado, rangoPrecios, ordenamiento]);

  // Limpiar filtros
  const limpiarFiltros = () => {
    setFiltroCategoria('todas');
    setColorSeleccionado('');
    setRangoPrecios('todos');
    setBusqueda('');
    setOrdenamiento('nombre');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Buscador */}
      <Buscador busqueda={busqueda} setBusqueda={setBusqueda} />

      {/* Filtros */}
      <Filtros
        categoriaSeleccionada={filtroCategoria}
        setCategoriaSeleccionada={setFiltroCategoria}
        colorSeleccionado={colorSeleccionado}
        setColorSeleccionado={setColorSeleccionado}
        rangoPrecios={rangoPrecios}
        setRangoPrecios={setRangoPrecios}
        limpiarFiltros={limpiarFiltros}
        categorias={categorias}
        colores={colores}
        rangosPrecios={rangosPrecios}
      />

      {/* Barra de herramientas */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <div className="text-gray-600">
          Mostrando {productosFiltrados.length} de {productos.length} productos
        </div>
        
        <div className="flex items-center gap-4">
          <label className="text-sm font-medium text-gray-700">Ordenar por:</label>
          <select
            value={ordenamiento}
            onChange={(e) => setOrdenamiento(e.target.value)}
            className="px-3 py-2 border border-[#5DA9E9] border-opacity-30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5DA9E9]"
          >
            <option value="nombre">Nombre</option>
            <option value="precio-asc">Precio: Menor a Mayor</option>
            <option value="precio-desc">Precio: Mayor a Menor</option>
          </select>
        </div>
      </div>

      {/* Grid de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {productosFiltrados.map((producto) => (
          <ProductCard
            key={producto.id}
            producto={producto}
            formatearPrecio={formatearPrecio}
            agregarAlCarrito={agregarAlCarrito}
          />
        ))}
      </div>

      {/* Mensaje cuando no hay productos */}
      {productosFiltrados.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-700 mb-2">No se encontraron productos</h3>
          <p className="text-gray-600 mb-4">Intenta ajustar los filtros o la búsqueda</p>
          <button
            onClick={limpiarFiltros}
            className="px-6 py-2 bg-[#5DA9E9] text-white rounded-lg hover:bg-[#2B4C7E] transition-colors"
          >
            Limpiar filtros
          </button>
        </div>
      )}

      {/* Botón flotante del carrito modularizado */}
      {carrito.length > 0 && (
        <BotonCarritoFlotante
          cantidadTotal={obtenerCantidadTotal()}
          onClick={() => setModalCarritoAbierto(true)}
        />
      )}

      {/* Modales - Los crearemos en archivos separados para mantener el código organizado */}
      {modalCarritoAbierto && (
        <ModalCarrito
          carrito={carrito}
          formatearPrecio={formatearPrecio}
          removerDelCarrito={removerDelCarrito}
          actualizarCantidad={actualizarCantidad}
          calcularTotal={calcularTotal}
          cerrarModal={() => setModalCarritoAbierto(false)}
          abrirPedido={() => {
            setModalCarritoAbierto(false);
            setModalPedidoAbierto(true);
          }}
        />
      )}

      {modalPedidoAbierto && (
        <ModalPedido
          carrito={carrito}
          formatearPrecio={formatearPrecio}
          calcularTotal={calcularTotal}
          datosCliente={datosCliente}
          setDatosCliente={setDatosCliente}
          enviarPedido={enviarPedido}
          cerrarModal={() => setModalPedidoAbierto(false)}
          volverAlCarrito={() => {
            setModalPedidoAbierto(false);
            setModalCarritoAbierto(true);
          }}
        />
      )}
    </div>
  );
};

// ...existing code...
export default CatalogoEstatico;