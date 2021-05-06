import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductStart, fetchProductsStart, deleteProductStart } from './../../redux/Products/products.actions';

//autocomplete from material-ui
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

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


const dimensions = [
  { dimension: "neck" },
  { dimension: "shoulder" },
  { dimension: "sleeve A" },
  { dimension: "sleeve B" },
  { dimension: "forearm" },
  { dimension: "cuff" },
  { dimension: "chest" },
  { dimension: "waist" },
  { dimension: "rise" },
  { dimension: "inseam" },
  { dimension: "hip" },
  { dimension: "thigh" },
  { dimension: "knee" },
  { dimension: "hem" },
  { dimension: "length" },
  { dimension: "length A" },
  { dimension: "length B" },
  { dimension: "width" },
  { dimension: "back" },
  { dimension: "heel" },
  { dimension: "platform" },
  { dimension: "sole" },
  { dimension: "height" },
  { dimension: "rim" },
  { dimension: "circumference" },
  { dimension: "lense height" },
  { dimension: "lense width" },
  { dimension: "arm" },
  { dimension: "bridge" },
  { dimension: "collar depth" }
];

//predefined list of style and trending "hashtags"
const styles = [
  { style: "cottagecore" },
  { style: "trendy" },
  { style: "preppy" },
  { style: "bohemian" },
  { style: "artsy" },
  { style: "casual" },
  { style: "smart casual" },
  { style: "goth" },
  { style: "punk" },
  { style: "trendy" },
  { style: "office" },
  { style: "business formal" },
  { style: "street style" },
  { style: "retro" },
  { style: "1950s" },
  { style: "1920s" },
  { style: "80s" },
  { style: "2000s" },
  { style: "vintage" },
  { style: "skateboarder" },
  { style: "normcore" },
  { style: "peter pan collar" },
  { style: "y2k" },
  { style: "neon" },
  { style: "embroidered" },
  { style: "open-back" },
  { style: "bell sleeves" },
  { style: "ruffles" },
  { style: "hypebeast" },
  { style: "influencer" },
  { style: "french chic" },
  { style: "bella hadid" },
  { style: "summer" },
  { style: "floral" }
];

const categories = [
  { category: "shirt" },
  { category: "pants" },
  { category: "shorts" },
  { category: "t-shirt" },
  { category: "sweater" },
  { category: "skirt" },
  { category: "dress" },
  { category: "boots" },
  { category: "sneakers" },
  { category: "heels" },
  { category: "tank top" },
  { category: "jeans" },
  { category: "scarf" },
  { category: "belt" },
  { category: "hat" },
  { category: "glasses" },
  { category: "sunglasses" },
  { category: "jacket" },
  { category: "blazer" },
  { category: "coat" },
  { category: "bodysuit" },
  { category: "leggings" },
  { category: "hoodie" }
];

const sizes = [
  { size: "XXS / 00 US / 26 EUR / 1 UK" },
  { size: "XXS / 0 US / 28 EUR / 2 UK" },
  { size: "XS / 2 US/ 30 EUR / 4 UK" },
  { size: "S / 4 US / 32 EUR / 6 UK" },
  { size: "S / 6 US / 34 EUR / 8 UK" },
  { size: "M / 8 US / 36 EUR / 10 UK" },
  { size: "M / 10 US / 38 EUR / 12 UK" },
  { size: "L / 12 US / 40 EUR / 14 UK" },
  { size: "L / 14 US / 42 EUR / 16 UK" },
  { size: "XL / 16 US / 44 EUR / 18 UK" },
  { size: "1X / 18 US / 46 EUR / 20 UK" },
  { size: "2X / 20 US / 48 EUR / 22 UK" },
  { size: "3X / 22 US / 50 EUR / 23 UK" },
  { size: "4 US / 34.5 EUR / 1.5 UK" },
  { size: "4.5 US / 35 EUR / 2 UK" },
  { size: "5 US / 35.5 EUR / 2.5 UK" },
  { size: "5.5 US / 36 EUR / 3 UK" },
  { size: "6 US / 36.5 EUR / 3.5 UK" },
  { size: "6.5 US / 37 EUR / 4 UK" },
  { size: "7 US / 37.5 EUR / 4.5 UK" },
  { size: "7.5 US / 38 EUR / 5 UK" },
  { size: "8 US / 38.5 EUR / 5.5 UK" },
  { size: "8.5 US / 39 EUR / 6 UK" },
  { size: "9 US / 39.5 EUR / 6.5 UK" },
  { size: "9.5 US / 40 EUR / 7 UK" },
  { size: "10 US / 40.5 EUR / 7.5 UK" },
  { size: "10.5 US / 41 EUR / 8 UK" },
  { size: "11 US / 41.5 EUR / 8.5 UK" },
  { size: "11.5 US / 42 EUR / 9 UK" },
  { size: "12 US / 42.5 EUR / 9.5 UK" },
  { size: "12.5 US / 43 EUR / 10 UK" },
  { size: "13 US / 44.5 EUR / 10.5 UK" },
  { size: "13.5 US / 5 EUR / 11 UK" },
  { size: "14 US / 45.5 EUR / 11.5 UK" },
  { size: "00" },
  { size: "0" },
  { size: "23" },
  { size: "24" },
  { size: "25" },
  { size: "26" },
  { size: "27" },
  { size: "28" },
  { size: "29" },
  { size: "30" },
  { size: "31" },
  { size: "32" },
  { size: "33" },
  { size: "34" },
  { size: "35" },
  { size: "36" },
  { size: "38" },
  { size: "39" },
  { size: "40" },
  { size: "41" },
  { size: "42" },
  { size: "43" },
  { size: "44" },
  { size: "45" },
  { size: "46" },
  { size: "onesize" },
  { size: "S/M" },
  { size: "M/L" }
];

const fit = [
  { fit: "skin tight" },
  { fit: "slim" },
  { fit: "fitted" },
  { fit: "regular" },
  { fit: "slim" },
  { fit: "relaxed/ loose" },
  { fit: "oversized" },
  { fit: "super oversized" },
  { fit: "cropped" },
  { fit: "long" },
  { fit: "flowy" }
];

const jeans = [
  { style: "bell bottoms" },
  { style: "flare" },
  { style: "cropped" },
  { style: "jegging" },
  { style: "skinny" },
  { style: "slim" },
  { style: "straight" },
  { style: "wide-leg" },
  { style: "puddle" },
  { style: "culotte" },
  { style: "bermuda" },
  { style: "short" },
  { style: "long" },
  { style: "petite" }
];

const brand = [
  { brand: "unknown" },
  { brand: "vintage" },
  { brand: "artisan" },
  { brand: "hand-made" },
  { brand: "adidas" },
  { brand: "nike" },
  { brand: "reebok" },
  { brand: "dr. martens" },
  { brand: "vans" },
  { brand: "converse" },
  { brand: "cole haan" },
  { brand: "sam edelman" },
  { brand: "zara" },
  { brand: "h&m" },
  { brand: "abercrombie" },
  { brand: "dynamite" },
  { brand: "aritzia" },
  { brand: "simons" },
  { brand: "lack of color" },
  { brand: "bailey" },
  { brand: "uniqlo" },
  { brand: "muji" },
  { brand: "rouje" },
  { brand: "maje" },
  { brand: "sandro" },
  { brand: "zadig & volitare" },
  { brand: "primark" },
  { brand: "shein" },
  { brand: "walmart" },
  { brand: "tibi" },
  { brand: "chanel" },
  { brand: "gucci" },
  { brand: "dickies" },
  { brand: "céline" },
  { brand: "ysl" },
  { brand: "balenciaga" },
  { brand: "chloé" },
  { brand: "see by chloé" },
  { brand: "circus by sam edelman" },
  { brand: "fendi" },
  { brand: "berluti" },
  { brand: "comme des garçons" },
  { brand: "brioni" },
  { brand: "canada goose" },
  { brand: "moose knuckles" },
  { brand: "mackage" },
  { brand: "soia & kyo" },
  { brand: "calvin klein" },
  { brand: "la vie en rose" },
  { brand: "la senza" },
  { brand: "guess" },
  { brand: "tory burch" },
  { brand: "rudsak" },
  { brand: "prada" },
  { brand: "dior" },
  { brand: "louis vuitton" },
  { brand: "dkny" },
  { brand: "kenzo" },
  { brand: "givenchy" },
  { brand: "dolce & gabbana" },
  { brand: "ganni" },
  { brand: "alexander mqueen" },
  { brand: "topshop" },
  { brand: "valentino" },
  { brand: "mango" },
  { brand: "lanvin" },
  { brand: "sézane" },
  { brand: "diane von furstenberg" },
  { brand: "roberto cavalli" },
  { brand: "versace" },
  { brand: "ralph lauren" },
  { brand: "gap" },
  { brand: "banana republic" },
  { brand: "madewell" },
  { brand: "old navy" },
  { brand: "levis" },
  { brand: "asos" },
  { brand: "boohoo" },
  { brand: "pretty little thing" },
  { brand: "galliano" },
  { brand: "giorgo armani" },
  { brand: "vivienne westwood" },
  { brand: "alexa chung" },
  { brand: "nanushka" },
  { brand: "tiffany & co" },
  { brand: "river island" },
  { brand: "anna sui" },
  { brand: "snidel" },
  { brand: "juicy couture" },
  { brand: "castaner" },
  { brand: "head" },
  { brand: "hermès" },
  { brand: "bvlgari" },
  { brand: "marc jacobs" },
  { brand: "lacoste" },
  { brand: "hugo boss" },
  { brand: "burberry" },
  { brand: "miumiu" },
  { brand: "under armour" },
  { brand: "swarovski" },
  { brand: "burton" },
  { brand: "helly hansen" },
  { brand: "michael kors" },
  { brand: "lululemon" },
  { brand: "max mara" },
  { brand: "nine west" },
  { brand: "call it spring" },
  { brand: "ugg" },
  { brand: "hoka" },
  { brand: "asics" },
  { brand: "salvatore ferragamo" },
  { brand: "tom ford" },
  { brand: "lisa says gah" },
  { brand: "moncler" },
  { brand: "bally" },
  { brand: "vera wang" },
  { brand: "sketchers" },
  { brand: "american eagle" },
  { brand: "aerie" },
  { brand: "longchamp" },
  { brand: "bcbg maxazria" },
  { brand: "bogner" },
  { brand: "kate spade" },
  { brand: "sisley" },
  { brand: "tods" },
  { brand: "toms" },
  { brand: "eddie bauer" },
  { brand: "esprit" },
  { brand: "karen millen" },
  { brand: "monsoon" },
  { brand: "mec" },
  { brand: "kate spade" },
  { brand: "ted baker" },
  { brand: "christian louboutin" },
  { brand: "furla" },
  { brand: "fossil" },
  { brand: "paul smith" },
  { brand: "pepe jeans" },
  { brand: "st. john" },
  { brand: "woolrich" },
  { brand: "birkenstock" },
  { brand: "express" },
  { brand: "coach" },
  { brand: "cartier" },
  { brand: "victoria's secret" },
  { brand: "pink" },
  { brand: "ray-ban" },
  { brand: "puma" },
  { brand: "the north face" },
  { brand: "pandora" },
  { brand: "omega" },
  { brand: "tommy hilfiger" },
  { brand: "american apparel" },
  { brand: "berksha" },
  { brand: "bottega veneta" },
  { brand: "swatch" },
  { brand: "tissot" },
  { brand: "spyder" },
  { brand: "stradivarius" },
  { brand: "massimo dutti" },
  { brand: "club monaco" }
];

const condition = [
  { condition: "new with tags" },
  { condition: "new without tags" },
  { condition: "used - like new" },
  { condition: "used" },
  { condition: "used with defects" },
  { condition: "fair" },
  { condition: "vintage" }
];

export default Admin;