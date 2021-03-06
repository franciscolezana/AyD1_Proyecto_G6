module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      nombre: String,
      categorias: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categoria'
      }],
      proveedores: [],
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Producto = mongoose.model("producto", schema);

  return Producto;
};