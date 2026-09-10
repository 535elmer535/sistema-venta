
# Guía 6 — Modelo de datos

## Entidades

- productos: lo que se vende (aparece en CU-01, CU-02, CU-03).
- clientes: quién compra, cuando aplica (mencionado en la entrevista, Guía 2).
- usuarios: quién registra cada venta (actor principal de CU-01).
- ventas: cada transacción registrada (CU-01).
- detalle_venta: qué productos y cantidades incluyó cada venta (relación N:N).

## Atributos

### usuarios
- id_usuario: identificador (clave primaria)
- nombre: texto
- email: texto
- password: texto
- rol: texto (vendedor / administrador)
- fecha_registro: fecha

### clientes
- id_cliente: identificador (clave primaria)
- nombre: texto
- email: texto
- telefono: texto
- direccion: texto

### productos
- id_producto: identificador (clave primaria)
- nombre: texto
- descripcion: texto
- precio: número decimal
- stock: número entero

### ventas
- id_venta: identificador (clave primaria)
- id_usuario: clave foránea -> usuarios
- id_cliente: clave foránea -> clientes
- fecha_venta: fecha / hora
- total: número decimal
- metodo_pago: texto
- estado: texto

### detalle_venta
- id_detalle: identificador (clave primaria)
- id_venta: clave foránea -> ventas
- id_producto: clave foránea -> productos
- cantidad: número entero
- precio_unitario: número decimal
- subtotal: número decimal

## Relaciones

- ventas.id_usuario -> usuarios.id_usuario (un usuario tiene muchas ventas)
- ventas.id_cliente -> clientes.id_cliente (un cliente tiene muchas ventas)
- detalle_venta.id_venta -> ventas.id_venta (una venta tiene muchas líneas de detalle)
- detalle_venta.id_producto -> productos.id_producto (un producto aparece en muchas líneas de detalle)

