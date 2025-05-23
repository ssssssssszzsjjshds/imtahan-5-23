import React from "react";
import styles from "./Admin.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  AddProductsThunk,
  DeleteProductsThunk,
  GetProductsThunk,
} from "../redux/reducers/productSlice";
import { useEffect } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

const Admin = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetProductsThunk());
  }, [dispatch]);

  const data = useSelector((state) => state.product.products);

  function Remove(item) {
    dispatch(DeleteProductsThunk(item._id))
      .then(dispatch(GetProductsThunk()))
      ;
  }
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    price: Yup.number()
      .required("Price is required")
      .positive("Price must be a positive number")
      .typeError("Price must be a number"),
    image: Yup.string()
      .url("Invalid URL format")
      .required("Image URL is required"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      image: "",
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(AddProductsThunk(values)).then(dispatch(GetProductsThunk()));
    },
  });
  return (
    <div>
    
      <div className={styles.form}>
        <form onSubmit={formik.handleSubmit}>
          <div className={styles.row}>
            <input
              placeholder="Name"
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.errors.name && formik.touched.name && (
              <div className="error">{formik.errors.name}</div>
            )}
          </div>
          <div className={styles.row}>
            <input
              placeholder="Price"
              id="price"
              name="price"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.price}
            />
            {formik.errors.price && formik.touched.price && (
              <div className="error">{formik.errors.price}</div>
            )}
          </div>
          <div className={styles.row}>
            <input
              placeholder="Image URL"
              id="image"
              name="image"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.image}
            />
            {formik.errors.image && formik.touched.image && (
              <div className="error">{formik.errors.image}</div>
            )}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className={styles.cards}>
        {data &&
          data.map((item) => (
            <div className={styles.card} key={item._id}>
              <div className={styles.img}>
                <img src={item.image} alt="" />
                <div className={styles.buttons}>
                  <button onClick={() => Remove(item)} className={styles.minus}>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
              <p>{item.name}</p>
              <p>$ {item.price}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Admin;
