import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductStart, fetchProductsStart, deleteProductStart } from './../../redux/Products/products.actions';
import Tile from './../../components/ProductTile/ProductTile';
import FormInput from './../../components/forms/FormInput';
import FormSelector from './../../components/forms/FormSelector';
import Button from './../../components/forms/Button';
import LoadMore from './../../components/LoadMore/LoadMore';
import CKEditor from 'ckeditor4-react';
import './styles.scss';

const mapState = ({ productsData }) => ({
  products: productsData.products
});

//user adding or deleting their product listings
const Admin = props => {
  const { products } = useSelector(mapState);
  //dispatch is a redux hook to dispatch the redux action
  const dispatch = useDispatch();
  //set react hooks for manipulating an object
  const [hideTile, setHideTile] = useState(true);
  const [productCategory, setProductCategory] = useState('mens');
  const [productName, setProductName] = useState('');
  const [productSize, setProductSize] = useState('M');
  const [productBrand, setProductBrand] = useState('Adidas');
  const [productThumbnail, setProductThumbnail] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  //for CKeditor
  const [productDesc, setProductDesc] = useState('');

  const { data, queryDoc, isLastPage } = products;

  //dispatch action that takes latest from products.saga
  useEffect(() => {
    dispatch(
      fetchProductsStart()
    );
  }, []);

  const toggleTile = () => setHideTile(!hideTile);

  const configTile = {
    hideTile,
    toggleTile
  };

  //reset form inputs to blank default
  const resetForm = () => {
    setHideTile(true);
    setProductCategory('mens');
    setProductName('');
    setProductSize('M');
    setProductBrand('Adidas');
    setProductThumbnail('');
    setProductPrice(0);
    setProductDesc('');
  };

  //submit with payload of inputted data by user
  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      addProductStart({
        productCategory,
        productName,
        productThumbnail,
        productPrice,
        productSize,
        productBrand,
        productDesc,
      })
    );
    resetForm();

  };

  const handleLoadMore = () => {
    dispatch(
      fetchProductsStart({
        startAfterDoc: queryDoc,
        persistProducts: data
      })
    );
  };

  const configLoadMore = {
    onLoadMoreEvt: handleLoadMore,
  };

  return (
    <div className="admin">

      <div className="callToActions">
        <ul>
          <li>
            <Button onClick={() => toggleTile()}>
              Add new product
            </Button>
          </li>
        </ul>
      </div>

      <Tile {...configTile}>
        <div className="addNewProductForm">
          <form onSubmit={handleSubmit}>

            <h2>Add new product</h2>

            <FormSelector
              label="Category"
              options={[{value: "mens", name: "Mens"},
              {value: "womens", name: "Womens"}]}
              handleChange={e => setProductCategory(e.target.value)}
            />
            
            <FormInput
              label="Name"
              type="text"
              value={productName}
              handleChange={e => setProductName(e.target.value)}
            />
            <FormInput
              label="Main image URL"
              type="url"
              value={productThumbnail}
              handleChange={e => setProductThumbnail(e.target.value)}
            />
            <FormInput
              label="Price"
              type="number"
              min="0.00"
              max="10000.00"
              step="0.01"
              value={productPrice}
              handleChange={e => setProductPrice(e.target.value)}
            />
            {/* wysiwyg editor */}
            <CKEditor
              onChange={evt => setProductDesc(evt.editor.getData())}
            />

            <br />

            <Button type="submit">
              Add product
            </Button>

          </form>
        </div>
      </Tile>

      <div className="manageProducts">

        <table border="0" cellPadding="0" cellSpacing="0">
          <tbody>
            <tr>
              <th>
                <h1>
                  Manage Products
                </h1>
              </th>
            </tr>
            <tr>
              <td>
                <table className="results" border="0" cellPadding="10" cellSpacing="0">
                  <tbody>
                    {(Array.isArray(data) && data.length > 0) && data.map((product, index) => {
                      const {
                        productName,
                        productThumbnail,
                        productPrice,
                        documentID
                      } = product;

                      return (
                        <tr key={index}>
                          <td>
                            <img className="thumb" src={productThumbnail} />
                          </td>
                          <td>
                            {productName}
                          </td>
                          <td>
                            ${productPrice}
                          </td>
                          <td>
                            <Button onClick={() => dispatch(deleteProductStart(documentID))}>
                              Delete
                            </Button>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>

              </td>
            </tr>
            <tr>
              <td>
                <table border="0" cellPadding="10" cellSpacing="0">
                  <tbody>
                    <tr>
                      <td>
                        {!isLastPage && (
                          <LoadMore {...configLoadMore} />
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>

      </div>

    </div>
  );
}

export default Admin;