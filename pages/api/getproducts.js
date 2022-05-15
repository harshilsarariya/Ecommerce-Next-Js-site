import connectDb from "../../middleware/mongoose";
import Product from "../../models/Product";

const handler = async (req, res) => {
  let products = await Product.find();
  res.status(200).json({ products });
  // res.status(200).json({ hello: "worlds" });
};

export default connectDb(handler);
// export default handler;
