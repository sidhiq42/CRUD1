import productModel from "../models/productDetail.js";
const ProductDeatils = {
  createproduct: async (req, res) => {
    try {
      const { productname, category, quantity, productimage, descriptions } =
        req.body;
      const product = await productModel.create({
        productname,
        category,
        quantity,
        productimage,
        descriptions,
      });
      if (!product) {
        return res.status(404).json({
          message: "prooduct not created",
        });
      }
      return res.status(201).json({
        message: "Product created Successfully",
        product,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: error.message,
      });
    }
  },
  viewAllproducts: async (req, res) => {
    try {
      const products = await productModel.find();
      if (!products) {
        res.status(404).json({
          message: "product not view",
        });
      }
      res.status(200).json({
        message: "product view successfully ",
        products,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },
  eachProduct: async (req, res) => {
    const { id } = req.params;
    try {
      const product = await productModel.findById(id);
      if (!product) {
        res.status(404).json({
          message: "product not found",
        });
      }
      res.status(200).json({
        message: "view Single Item Was",
        product,
      });
    } catch (error) {
      res.status(500).json({
        message: "InternalServer Error",
      });
    }
  },
  editProduct: async (req, res) => {
    const { id } = req.params;
    const newData = req.body; 
    try {
      const updatedProduct = await productModel.findByIdAndUpdate(id, newData, { new: true });
      if (!updatedProduct) {
        return res.status(404).json({
          message: "Product not found",
        });
      }
      return res.status(200).json({
        message: "Product updated successfully",
        product: updatedProduct,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: error.message,
      });
    }
  },

  deleteProduct: async (req, res) => {
    const { id } = req.params;
    try {
      const deletedProduct = await productModel.findByIdAndDelete(id);
      if (!deletedProduct) {
        return res.status(404).json({
          message: "Product not found",
        });
      }
      return res.status(200).json({
        message: "Product deleted successfully",
      });
    } catch (error) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: error.message,
      });
    }
  },
};
export default ProductDeatils;
