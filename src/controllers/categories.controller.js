import Category from "../models/Category";

export const createCategory = async (req, res) => {
  const { name } = req.body;

  const newCategory = new Category({ name });

  const categorysaved = await newCategory.save();

  res.status(201).json(categorysaved);
};

export const getCategories = async (req, res) => {
  const Categories = await Category.find();

  res.status(200).json(Categories);
};

export const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.categoryId);
    if (!category) {
      return res.status(404).json({ message: "category not found" });
    }
    res.status(200).json(category);
  } catch (error) {
    return res
      .status(404)
      .json({ message: "category not found and bad params" });
  }
};

export const updateCategoryById = async (req, res) => {
  const updateCategory = await Category.findByIdAndUpdate(
    req.params.CategoryId,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updateCategory);
};

export const deleteCategoryById = async (req, res) => {
  try {
    await Category.findByIdAndRemove(req.params.CategoryId);

    res.status(200).json({ message: "category deleted" });
  } catch (error) {
    return res
      .status(404)
      .json({ message: "category not found and bad params" });
  }
};
