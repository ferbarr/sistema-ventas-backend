(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4972d82d"],{4368:function(t,e,a){},"6a6c":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{staticClass:"d-flex justify-center mt-2"},[a("v-snackbar",{attrs:{top:"",color:t.snack.color,timeout:t.snack.time},model:{value:t.snack.active,callback:function(e){t.$set(t.snack,"active",e)},expression:"snack.active"}},[t._v(t._s(t.snack.msj))]),t.verNuevo?t._e():a("v-card",{staticClass:"col-11"},[a("v-card-title",[a("v-btn",{attrs:{fab:"",small:"",color:"primary"},on:{click:function(e){return t.mostrarNuevo()}}},[a("v-icon",[t._v("mdi-plus")])],1),a("v-spacer"),a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Buscar"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),a("v-data-table",{attrs:{locale:"es-MX",headers:t.encabezado,items:t.ventas,search:t.search},scopedSlots:t._u([{key:"body",fn:function(e){var s=e.items;return[a("tbody",t._l(s,(function(e){return a("tr",{key:e._id},[a("td",[a("div",[a("v-btn",{attrs:{small:"",fab:"",text:""},on:{click:function(a){return t.modalReporte(e)}}},[a("v-icon",[t._v("mdi-printer")])],1),a("v-btn",{attrs:{small:"",fab:"",text:""},on:{click:function(a){return t.listarDetalles(e._id)}}},[a("v-icon",[t._v("mdi-eye")])],1)],1)]),a("td",{staticClass:"text-center"},[t._v(t._s(e.usuario.nombre))]),a("td",{staticClass:"text-center"},[t._v(t._s(e.persona.nombre))]),a("td",{staticClass:"text-center"},[t._v(t._s(e.tipo_comprobante))]),a("td",{staticClass:"text-center"},[t._v(t._s(e.serie_comprobante))]),a("td",{staticClass:"text-center"},[t._v(t._s(e.num_comprobante))]),a("td",{staticClass:"text-center"},[t._v(t._s(e.createdAt))]),a("td",{staticClass:"text-center"},[t._v(t._s(e.impuesto))]),a("td",{staticClass:"text-center"},[t._v(t._s(e.total))]),a("td",{staticClass:"text-center"},[e.estado?a("div",[a("v-btn",{staticClass:"success",attrs:{small:""},on:{click:function(a){return t.editEstado(e)}}},[t._v("Aceptada")])],1):a("div",[a("v-btn",{staticClass:"red",attrs:{small:""},on:{click:function(a){return t.editEstado(e)}}},[t._v("Anulada")])],1)])])})),0)]}}],null,!1,1076001424)},[a("template",{slot:"no-data"},[a("h3",[t._v("No hay datos")])])],2)],1),t.verNuevo?a("v-container",{staticClass:"pa-4 white",attrs:{"grid-list-sm":""}},[a("v-row",{attrs:{wrap:""}},[a("v-col",{staticClass:"col-12 col-sm-4"},[a("v-select",{attrs:{label:"Tipo comprobante",items:t.comprobantes},model:{value:t.inputs.tipo_comprobante,callback:function(e){t.$set(t.inputs,"tipo_comprobante",e)},expression:"inputs.tipo_comprobante"}})],1),a("v-col",{staticClass:"col-12 col-sm-4"},[a("v-text-field",{attrs:{label:"Serie comprobante"},model:{value:t.inputs.serie_comprobante,callback:function(e){t.$set(t.inputs,"serie_comprobante",e)},expression:"inputs.serie_comprobante"}})],1),a("v-col",{staticClass:"col-12 col-sm-4"},[a("v-text-field",{attrs:{label:"Número comprobante"},model:{value:t.inputs.num_comprobante,callback:function(e){t.$set(t.inputs,"num_comprobante",e)},expression:"inputs.num_comprobante"}})],1),a("v-col",{staticClass:"col-12 col-sm-8"},[a("v-autocomplete",{attrs:{items:t.personas,label:"Cliente"},model:{value:t.inputs.persona,callback:function(e){t.$set(t.inputs,"persona",e)},expression:"inputs.persona"}})],1),a("v-col",{staticClass:"col-12 col-sm-4"},[a("v-text-field",{attrs:{label:"Impuesto",type:"number"},model:{value:t.inputs.impuesto,callback:function(e){t.$set(t.inputs,"impuesto",e)},expression:"inputs.impuesto"}})],1),a("v-col",{staticClass:"col-12 col-sm-8"},[a("v-text-field",{attrs:{label:"Código"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getArticuloCodigo()}},model:{value:t.codigo,callback:function(e){t.codigo=e},expression:"codigo"}})],1),a("v-col",{staticClass:"col-12 col-sm-2"},[a("v-btn",{attrs:{fab:"",small:""},on:{click:function(e){t.dialog=!0}}},[a("v-icon",[t._v("mdi-view-list")])],1)],1),a("v-col",{staticClass:"col-12"},[[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.cabeceraDetalle,items:t.inputs.detalles,"hide-default-footer":""},scopedSlots:t._u([{key:"body",fn:function(e){var s=e.items;return[a("tbody",t._l(s,(function(e){return a("tr",{key:e._id},[a("td",{staticClass:"text-center"},[a("v-btn",{attrs:{fab:"",text:"",small:"",color:"red"},on:{click:function(a){return t.delDetalle(t.inputs.detalles,e)}}},[a("v-icon",{attrs:{dark:""}},[t._v("mdi-trash-can")])],1)],1),a("td",{staticClass:"text-center"},[t._v(t._s(e.articulo))]),a("td",{staticClass:"text-center"},[a("v-text-field",{attrs:{type:"number"},model:{value:e.cantidad,callback:function(a){t.$set(e,"cantidad",a)},expression:"datos.cantidad"}})],1),a("td",{staticClass:"text-center"},[a("v-text-field",{attrs:{type:"number",step:"any"},model:{value:e.precio,callback:function(a){t.$set(e,"precio",a)},expression:"datos.precio"}})],1),a("td",{staticClass:"text-center"},[a("v-text-field",{attrs:{type:"number",step:"any"},model:{value:e.descuento,callback:function(a){t.$set(e,"descuento",a)},expression:"datos.descuento"}})],1),a("td",{staticClass:"text-center"},[t._v(" "+t._s(e.precio*e.cantidad-e.descuento)+" ")])])})),0)]}},{key:"no-results",fn:function(){return[a("h3",[t._v("No hay artículos agregados")])]},proxy:!0}],null,!1,2922093098)}),a("v-col",{staticClass:"text-right"},[a("strong",[t._v("Total Neto: ")]),t._v("$"+t._s(this.inputs.total=this.calcularTotal)+" ")])]],2),a("v-col",{staticClass:"col-12 text-right"},[a("v-btn",{staticClass:"mr-3",attrs:{small:""},on:{click:function(e){return t.ocultarNuevo()}}},[t._v("Cancelar")]),a("v-btn",{attrs:{small:""},on:{click:function(e){return t.agregarVenta()}}},[t._v("Guardar")])],1)],1)],1):t._e(),a("v-dialog",{attrs:{persistent:"","max-width":"1000px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[a("span",[t._v("Seleccione un articulo")]),a("v-spacer"),a("v-btn",{attrs:{text:"",fab:"",color:"black"},on:{click:function(e){return t.cerrarModalArticulo()}}},[a("v-icon",[t._v("mdi-close")])],1)],1),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{staticClass:"col-12"},[a("v-text-field",{staticClass:"text-center",attrs:{label:"Buscar articulo","prepend-icon":"mdi-magnify"},on:{keyup:function(e){return t.listarArticulos()}},model:{value:t.texto,callback:function(e){t.texto=e},expression:"texto"}}),[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.encabezadoArticulo,items:t.articulos,"hide-default-footer":""},scopedSlots:t._u([{key:"body",fn:function(e){var s=e.items;return[a("tbody",t._l(s,(function(e){return a("tr",{key:e._id},[a("td",{staticClass:"text-center"},[a("v-btn",{attrs:{fab:"",text:""},on:{click:function(a){return t.agregarDetalle(e)}}},[a("v-icon",{attrs:{dark:""}},[t._v("mdi-plus")])],1)],1),a("td",{staticClass:"text-center"},[t._v(t._s(e.codigo))]),a("td",{staticClass:"text-center"},[t._v(t._s(e.nombre))]),a("td",{staticClass:"text-center"},[t._v(t._s(e.descripcion))]),a("td",{staticClass:"text-center"},[t._v(t._s(e.precio_venta))]),a("td",{staticClass:"text-center"},[t._v(t._s(e.stock))])])})),0)]}}])})]],2)],1)],1)],1)],1)],1),a("v-dialog",{attrs:{persistent:"","max-width":"1000px"},model:{value:t.vDetalle,callback:function(e){t.vDetalle=e},expression:"vDetalle"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[a("span",[t._v("Detalles de compra")]),a("v-spacer"),a("v-btn",{attrs:{text:"",fab:"",color:"black"},on:{click:function(e){return t.cerrarModalArticulo()}}},[a("v-icon",[t._v("mdi-close")])],1)],1),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{staticClass:"col-12"},[[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.verDetalle,items:t.articulos,"hide-default-footer":""},scopedSlots:t._u([{key:"body",fn:function(e){var s=e.items;return[a("tbody",t._l(s,(function(e){return a("tr",{key:e._id},[a("td",{staticClass:"text-center"},[t._v(t._s(e.articulo))]),a("td",{staticClass:"text-center"},[t._v(t._s(e.cantidad))]),a("td",{staticClass:"text-center"},[t._v(t._s(e.precio))])])})),0)]}}])})]],2)],1)],1)],1)],1)],1),a("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.estado.active,callback:function(e){t.$set(t.estado,"active",e)},expression:"estado.active"}},[a("v-card",[a("v-card-title",{staticClass:"red lighten-2"},[t._v("Ingresos "),a("v-spacer"),a("v-btn",{attrs:{text:"",fab:"",color:"black"},on:{click:function(e){return t.clearEstado()}}},[a("v-icon",[t._v("mdi-close")])],1)],1),a("v-card-text",[a("v-container",[1===this.estado.estado?a("span",{staticClass:"black--text"},[t._v("¿Deseas cancelar la venta con serie de comprobante "+t._s(this.estado.serie_comprobante)+"?")]):t._e(),0===this.estado.estado?a("span",{staticClass:"black--text"},[t._v("¿Deseas activar la venta con serie de comprobante "+t._s(this.estado.serie_comprobante)+"?")]):t._e()])],1),a("v-card-actions",[a("v-btn",{on:{click:function(e){return t.clearEstado()}}},[t._v("Cancelar")]),a("v-spacer"),a("v-btn",{on:{click:function(e){return t.cambiarEstado()}}},[t._v("Aceptar")])],1)],1)],1),a("v-dialog",{attrs:{persistent:"","max-width":"1000px"},model:{value:t.modalPDF,callback:function(e){t.modalPDF=e},expression:"modalPDF"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[a("span",[t._v("Reporte de venta")]),a("v-btn",{staticClass:"ml-1",on:{click:function(e){return t.crearPDF()}}},[a("v-icon",[t._v("mdi-printer")])],1),a("v-spacer"),a("v-btn",{attrs:{text:"",fab:"",color:"black"},on:{click:function(e){return t.cerrarModalPDF()}}},[a("v-icon",[t._v("mdi-close")])],1)],1),a("v-card-text",[a("div",{attrs:{id:"factura"}},[a("header",[a("div",{staticClass:"mt-4",attrs:{id:"datos"}},[a("p",{staticClass:"text-center",attrs:{id:"encabezado"}},[a("b",[t._v("Fernando. INC")]),a("br"),t._v("Fernando de Jesús,Valle de Santiago - Guanajuato, México"),a("br"),t._v("Telefono:(+52)4561073640"),a("br"),t._v("Email:barrerarosalesfernando8@gmail.com ")])]),a("div",{staticClass:"text-center text-h6"},[a("span",[a("b",[t._v(t._s(t.inputs.tipo_comprobante))]),a("br"),t._v(" "+t._s(t.inputs.serie_comprobante)+"-"+t._s(t.inputs.num_comprobante)),a("br"),t._v(" "+t._s(t.fecha)+" ")])])]),a("section",{staticClass:"mt-6"},[a("div",[a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("tbody",[a("tr",[a("td",[a("strong",[t._v("Sr(a). "+t._s(t.inputs.persona)+" ")]),a("br"),a("strong",[t._v("Dirección:")]),t._v(" "+t._s(t.dir)+" "),a("br"),a("strong",[t._v("Teléfono:")]),t._v(" "+t._s(t.tel)+" "),a("br"),a("strong",[t._v("Email:")]),t._v(" "+t._s(t.email)+" ")])])])]},proxy:!0}])})],1)]),a("section",[a("div",[a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",{staticClass:"primary"},[a("tr",[a("th",{staticClass:"text-center white--text"},[t._v("Cantidad")]),a("th",{staticClass:"text-center white--text"},[t._v("Descripción")]),a("th",{staticClass:"text-center white--text"},[t._v("Precio unitario")]),a("th",{staticClass:"text-center white--text"},[t._v("Descuento")]),a("th",{staticClass:"text-center white--text"},[t._v("Precio total")])])]),a("tbody",t._l(t.inputs.detalles,(function(e){return a("tr",{key:e._id},[a("td",{staticClass:"text-center"},[t._v(t._s(e.cantidad))]),a("td",{staticClass:"text-center"},[t._v(t._s(e.articulo))]),a("td",{staticClass:"text-center"},[t._v(t._s(e.precio))]),a("td",{staticClass:"text-center"},[t._v(t._s(e.descuento))]),a("td",{staticClass:"text-center"},[t._v(" "+t._s(e.cantidad*e.precio-e.descuento)+" ")])])})),0),a("tbody",[a("tr",[a("td"),a("td"),a("td"),a("td",{staticClass:"text-right"},[t._v("TOTAL")]),a("td",{staticClass:"text-center"},[t._v("$"+t._s(t.inputs.total))])])])]},proxy:!0}])})],1)]),a("br"),a("br"),a("footer",[a("div",{staticClass:"text-center"},[a("p",[a("b",[t._v("Gracias por su compra!")])])])])])])],1)],1)],1)},r=[],o=a("1da1"),n=(a("96cf"),a("d81d"),a("7db0"),a("d3b7"),a("a434"),a("8baf")),c=a("c0e9"),i=a.n(c),l={data:function(){return{fecha:"",vDetalle:!1,ventas:[],personas:[],comprobantes:["Factura","Ticket","Boleta"],codigo:null,inputs:{usuario:"",persona:null,tipo_comprobante:null,serie_comprobante:null,num_comprobante:null,impuesto:18,total:0,detalles:[]},search:"",estado:{_id:"",serie_comprobante:"",active:!1,estado:null},snack:{color:"",time:3500,msj:"",active:!1},dialog:!1,_id:"",encabezado:[{text:"Opciones",value:"accion",sortable:!1},{text:"Usuario",value:"usuario.nombre",sortable:!0},{text:"Cliente",value:"persona.nombre",sortable:!0},{text:"Tipo comprobante",value:"tipo_comprobante",sortable:!0},{text:"Serie comprobante",value:"serie_comprobante",sortable:!1},{text:"Número comprobante",value:"num_comprobante",sortable:!1},{text:"Fecha",value:"createdAt",sortable:!1},{text:"Impuesto",value:"impuesto",sortable:!1},{text:"Total",value:"total",sortable:!1},{text:"Estado",value:"estado",sortable:!1}],cabeceraDetalle:[{text:"Borrar",value:"borrar",sortable:!1,align:"center"},{text:"Artículo",value:"articulo",sortable:!1,align:"center"},{text:"Cantidad",value:"cantidad",sortable:!1,align:"center"},{text:"Precio",value:"precio",sortable:!1,align:"center"},{text:"Descuento",value:"descuento",sortable:!1,align:"center"}],verNuevo:!1,encabezadoArticulo:[{text:"Seleccionar",value:"seleccionar",sortable:!1},{text:"Código",value:"codigo",sortable:!1},{text:"Articulo",value:"nombre",sortable:!0},{text:"Descripción",value:"descripcion",sortable:!0},{text:"Precio de venta",value:"precio_venta",sortable:!1},{text:"Stock",value:"stock",sortable:!1}],verDetalle:[{text:"Articulo",value:"articulo",sortable:!1,align:"center",class:"red lighten-2"},{text:"Cantidad",value:"cantidad",sortable:!1,align:"center",class:"red lighten-2"},{text:"Precio",value:"precio",sortable:!1,align:"center",class:"red lighten-2"}],articulos:[],texto:"",modalPDF:!1,tel:"",email:"",dir:""}},methods:{crearPDF:function(){var t=document.getElementById("factura");i()(t).then((function(t){var e=t.toDataURL("image/png"),a=210,s=295,r=t.height*a/t.width,o=r,c=new n["default"]("p","mm","a4"),i=0;c.addImage(e,"PNG",0,i,a,r),o-=s;while(o>=0)i=o-r,c.addPage(),c.addImage(e,"PNG",0,i,a,r),o-=s;c.save("comprobante.pdf")})),this.cerrarModalPDF()},modalReporte:function(t){this.modalPDF=!0,this.fecha=t.createdAt,this.tel=t.persona.telefono,this.email=t.persona.email,this.dir=t.persona.direccion,this.inputs={usuario:t.usuario,persona:t.persona.nombre,tipo_comprobante:t.tipo_comprobante,serie_comprobante:t.serie_comprobante,num_comprobante:t.num_comprobante,impuesto:t.impuesto,total:t.total,detalles:t.detalles}},cerrarModalPDF:function(){this.modalPDF=!1,this.fecha="",this.tel="",this.email="",this.dir="",this.inputs={usuario:"",persona:null,tipo_comprobante:null,serie_comprobante:null,num_comprobante:null,impuesto:18,total:0,detalles:[]}},listarCliente:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,s,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={token:t.$store.state.token},s={headers:a},r=[],e.prev=3,e.next=6,t.axios.get("/persona/get-cliente",s);case 6:o=e.sent,r=o.data,r.map((function(e){return t.personas.push({text:e.nombre,value:e._id})})),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](3),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})))()},listarVentas:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,s,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={token:t.$store.state.token},s={headers:a},e.prev=2,e.next=5,t.axios.get("/venta/get-all-venta",s);case 5:r=e.sent,t.ventas=r.data,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](2),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))()},editEstado:function(t){this.estado={_id:t._id,serie_comprobante:t.serie_comprobante,active:!0,estado:t.estado}},clearEstado:function(){this.estado={_id:"",serie_comprobante:"",active:!1,estado:null}},cambiarEstado:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a={token:t.$store.state.token},s={headers:a},1!==t.estado.estado){e.next=18;break}return e.prev=3,e.next=6,t.axios.put("venta/deactivate-venta",{_id:t.estado._id},s);case 6:e.sent,t.snack={color:"success",time:2500,active:!0,msj:"Venta cancelada"},t.listarVentas(),t.clearEstado(),e.next=16;break;case 12:e.prev=12,e.t0=e["catch"](3),t.snack={color:"error",time:2500,active:!0,msj:"Ocurrio un error"},t.clearEstado();case 16:e.next=31;break;case 18:return e.prev=18,e.next=21,t.axios.put("venta/activate-venta",{_id:t.estado._id},s);case 21:e.sent,t.snack={color:"success",time:2500,active:!0,msj:"Venta activada"},t.listarVentas(),t.clearEstado(),e.next=31;break;case 27:e.prev=27,e.t1=e["catch"](18),t.snack={color:"error",time:3500,active:!0,msj:"Ocurrio un error"},t.clearEstado();case 31:case"end":return e.stop()}}),e,null,[[3,12],[18,27]])})))()},mostrarNuevo:function(){this.verNuevo=!0},ocultarNuevo:function(){this.verNuevo=!1,this.inputs={persona:null,tipo_comprobante:null,serie_comprobante:null,num_comprobante:null,impuesto:18,total:null,detalles:[]}},getArticuloCodigo:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,s,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={token:t.$store.state.token},s={headers:a},e.prev=2,e.next=5,t.axios.get("/articulo/get-articulo-codigo?codigo=".concat(t.codigo),s);case 5:r=e.sent,t.agregarDetalle(r.data),e.next=13;break;case 9:e.prev=9,e.t0=e["catch"](2),console.log(e.t0.response),t.snack={color:"error",time:2e3,active:!0,msj:e.t0.response.data.msj};case 13:case"end":return e.stop()}}),e,null,[[2,9]])})))()},buscar:function(t){var e=this.inputs.detalles.find((function(e){return e._id===t}));return!!e},agregarDetalle:function(t){this.buscar(t._id)?this.snack={color:"error",time:2e3,active:!0,msj:"El articulo ya fue agregado"}:this.inputs.detalles.push({_id:t._id,articulo:t.nombre,cantidad:1,precio:t.precio_venta,descuento:0}),this.codigo=""},delDetalle:function(t,e){var a=t.indexOf(e);-1!=a&&t.splice(a,1)},listarArticulos:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,s,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={token:t.$store.state.token},s={headers:a},e.prev=2,e.next=5,t.axios.get("/articulo/get-all-articulo?valor=".concat(t.texto),s);case 5:r=e.sent,t.articulos=r.data,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](2),t.snack={color:"error",time:3500,active:!0,msj:"Ocurrio un error"};case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))()},cerrarModalArticulo:function(){this.vDetalle=!1,this.dialog=!1,this.articulos=[]},agregarVenta:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={token:t.$store.state.token},s={headers:a},e.prev=2,e.next=5,t.axios.post("/venta/add-venta",{persona:t.inputs.persona,usuario:t.$store.state.user._id,tipo_comprobante:t.inputs.tipo_comprobante,serie_comprobante:t.inputs.serie_comprobante,num_comprobante:t.inputs.num_comprobante,impuesto:t.inputs.impuesto,total:t.inputs.total,detalles:t.inputs.detalles},s);case 5:e.sent,t.ocultarNuevo(),t.listarVentas(),t.snack={color:"success",time:2500,active:!0,msj:"Venta realizada"},e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](2),t.snack={color:"error",time:2500,active:!0,msj:"Ocurrio un error"};case 14:case"end":return e.stop()}}),e,null,[[2,11]])})))()},listarDetalles:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var s,r,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.vDetalle=!0,s={token:e.$store.state.token},r={headers:s},a.prev=3,a.next=6,e.axios.get("/venta/get-venta?_id=".concat(t),r);case 6:o=a.sent,e.articulos=o.data.detalles,a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](3),e.snack={color:"error",time:3500,active:!0,msj:"Ocurrio un error"};case 13:case"end":return a.stop()}}),a,null,[[3,10]])})))()}},computed:{calcularTotal:function(){var t=0;return this.inputs.detalles.map((function(e){t+=e.cantidad*e.precio-e.descuento})),t}},created:function(){this.listarVentas(),this.listarCliente()}},u=l,d=(a("e218"),a("2877")),v=Object(d["a"])(u,s,r,!1,null,null,null);e["default"]=v.exports},"7db0":function(t,e,a){"use strict";var s=a("23e7"),r=a("b727").find,o=a("44d2"),n="find",c=!0;n in[]&&Array(1)[n]((function(){c=!1})),s({target:"Array",proto:!0,forced:c},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),o(n)},a434:function(t,e,a){"use strict";var s=a("23e7"),r=a("da84"),o=a("23cb"),n=a("5926"),c=a("07fa"),i=a("7b0b"),l=a("65f0"),u=a("8418"),d=a("1dde"),v=d("splice"),p=r.TypeError,m=Math.max,b=Math.min,_=9007199254740991,f="Maximum allowed length exceeded";s({target:"Array",proto:!0,forced:!v},{splice:function(t,e){var a,s,r,d,v,x,h=i(this),k=c(h),g=o(t,k),C=arguments.length;if(0===C?a=s=0:1===C?(a=0,s=k-g):(a=C-2,s=b(m(n(e),0),k-g)),k+a-s>_)throw p(f);for(r=l(h,s),d=0;d<s;d++)v=g+d,v in h&&u(r,d,h[v]);if(r.length=s,a<s){for(d=g;d<k-s;d++)v=d+s,x=d+a,v in h?h[x]=h[v]:delete h[x];for(d=k;d>k-s+a;d--)delete h[d-1]}else if(a>s)for(d=k-s;d>g;d--)v=d+s-1,x=d+a-1,v in h?h[x]=h[v]:delete h[x];for(d=0;d<a;d++)h[d+g]=arguments[d+2];return h.length=k-s+a,r}})},e218:function(t,e,a){"use strict";a("4368")}}]);
//# sourceMappingURL=chunk-4972d82d.bd87b349.js.map