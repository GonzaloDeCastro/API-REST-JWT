import Product from "../models/Product";

export const createProduct = async (req, res) => {
  const { name, category, price, imgURL } = req.body;

  const newProduct = new Product({ name, category, price, imgURL });

  const productSaved = await newProduct.save();

  res.status(201).json(productSaved);
};

export const getProducts = async (req, res) => {
  const products = await Product.find();

  res.status(200).json(products);
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) {
      return res.status(404).json({ message: "product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    return res
      .status(404)
      .json({ message: "product not found and bad params" });
  }
};

export const updateProductById = async (req, res) => {
  const updateProduct = await Product.findByIdAndUpdate(
    req.params.productId,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updateProduct);
};

export const deleteProductById = async (req, res) => {
  try {
    await Product.findByIdAndRemove(req.params.productId);

    res.status(200).json({ message: "product deleted" });
  } catch (error) {
    return res
      .status(404)
      .json({ message: "product not found and bad params" });
  }
};
