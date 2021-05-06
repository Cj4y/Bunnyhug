// /* eslint-disable no-use-before-define */
// import React, { useState } from "react";
// import Autocomplete from "@material-ui/lab/Autocomplete";
// import { makeStyles } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";
// import "bootswatch/dist/litera/bootstrap.min.css";

// //* Shortcut classes for bootstrap theme-ing */
// class AutoBindComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { inputs: [] };
//     for (let p in this)
//       if (typeof this[p] === "function") this[p] = this[p].bind(this);
//   }
// }

// class Container extends React.Component {
//   render() {
//     return <div className="container">{this.props.children}</div>;
//   }
// }

// var Row = function (props) {
//   return (
//     <div className={(props.className ? props.className + " " : "") + "row"}>
//       {props.children}
//     </div>
//   );
// };

// var Col = function (props) {
//   var css =
//     //'col-sm-' + (props.sm || 12)
//     (props.sm ? "col-sm-" + props.sm : "") +
//     (props.md ? " col-md-" + props.md : "") +
//     (props.lg ? " col-lg-" + props.lg : "") +
//     (props.xl ? " col-xl-" + props.xl : "") +
//     (props.xs ? " col-xs-" + props.xs : "");
//   return <div className={css}>{props.children}</div>;
// };

// var Jumbotron = function (props) {
//   return <div className="jumbotron">{props.children}</div>;
// };

// var Lead = (props) => <div className="lead">{props.children}</div>;

// var FormGroup = (props) => (
//   <div
//     className={"form-group" + (props.className ? " " + props.className : "")}
//   >
//     {props.children}
//   </div>
// );
// var FormGroupRow = (props) => <FormGroup className="row" {...props} />;
// var ColFormLabel = (props) => <Col className="col-form-label" {...props} />;

// var Label = (props) => {
//   return <label htmlFor={props.htmlFor}>{props.text || props.children}</label>;
// };

// var FormControlInput = (props) => (
//   <input
//     type={props.type}
//     className={
//       (props.className || "") + " " + (props.primaryClassName || "form-control")
//     }
//     id={props.id}
//     aria-describedby={props.describedBy}
//     placeholder={props.placeholder}
//     value={props.value}
//     ref={props.ref}
//   />
// );

// var TitleInput = (props) => <FormControlInput type="title" {...props} />;

// var DescriptionInput = (props) => (
//   <FormControlInput type="description" {...props} />
// );

// var Select = (props) => (
//   <select
//     className={(props.className || "") + " form-control"}
//     multiple={props.multiple || null}
//     value={props.value}
//     selectedValues={props.selectedValues}
//   >
//     {(props.items || []).map((item) => (
//       <option
//         selected={
//           props.selectedValues && props.selectedValues.some((v) => v == item)
//         }
//       >
//         {item}
//       </option>
//     ))}
//     {props.children}
//   </select>
// );

// var TextArea = (props) => (
//   <textarea
//     rows={props.rows}
//     cols={props.cols}
//     className={(props.className || "") + " form-control"}
//   >
//     {props.value || props.children}
//   </textarea>
// );

// var FileInput = (props) => (
//   <FormControlInput
//     type="file"
//     primaryClassName="form-control-input"
//     {...props}
//   />
// );

// var Button = function (props) {
//   props.className = props.className || "btn";
//   if (props.size) props.className += " btn-" + props.size;
//   //if(props.color) props.className+= " btn-" + props.color;
//   props.className += " btn-" + (props.color || "default");
//   props.onClick =
//     props.onClick ||
//     function () {
//       console.log("Button pressed");
//     };
//   return <button {...props}>{props.text || props.children}</button>;
// };
// var SubmitButton = (props) => <Button type="submit" {...props}></Button>;

// var FormGroupFieldSet = (props) => (
//   <fieldset className="form-group">{props.children}</fieldset>
// );

// /*
// var Form = (props) => <form action={props.action} method={props.method} className={props.className} onSubmit={props.onSubmit}>{props.children}</form>;//*/
// var Form = (props) => <form {...props}>{props.children}</form>;

// var HorizontalForm = (props) => {
//   props.className =
//     "form-horizontal" + (props.className ? " " + props.className : "");
//   return <Form {...props}></Form>;
// };
// var InlineForm = (props) => {
//   props.className =
//     "form-inline" + (props.className ? " " + props.className : "");
//   return <Form {...props}></Form>;
// };

// var FormCheckDiv = (props) => (
//   <div
//     className={
//       "form-check" +
//       (props.disabled ? " disabled" : "") +
//       (props.className ? " " + props.className : "")
//     }
//   >
//     {props.children}
//   </div>
// );
// var FormCheckLabel = (props) => (
//   <label className="form-check-label">{props.children}</label>
// );
// var FormCheckInput = (props) => (
//   <input
//     className={
//       "form-check-input" + (props.className ? " " + props.className : "")
//     }
//     type={props.type}
//     name={props.name}
//     id={props.id}
//     onChange={props.onChange}
//     onClick={props.onClick}
//     onBlur={props.onBlur}
//     value={props.value}
//     disabled={props.disabled}
//   />
// );
// var FormCheckRadio = (props) => (
//   <FormCheckDiv {...props}>
//     <FormCheckLabel>
//       <FormCheckInput type="radio" {...props} />
//       {props.label || props.children}
//     </FormCheckLabel>
//   </FormCheckDiv>
// );
// var FormCheckBox = (props) => (
//   <FormCheckDiv {...props}>
//     <FormCheckLabel>
//       <FormCheckInput type="checkbox" {...props} />
//       {props.label || props.children}
//     </FormCheckLabel>
//   </FormCheckDiv>
// );

// var FormControlStatic = (props) => (
//   <p className="form-control-static">
//     {props.value || props.text || props.children}
//   </p>
// );

// //*********** */

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: 500,
//     "& > * + *": {
//       marginTop: theme.spacing(3)
//     }
//   }
// }));

// export default function LimitTags() {
//   const classes = useStyles();

//   //handle dimensions input state
//   const [inputList, setInputList] = useState([{ dimension: "", value: "" }]);

//   // handle input change
//   const handleInputChange = (e, index) => {
//     const { name, value } = e.target;
//     const list = [...inputList];
//     list[index][name] = value;
//     setInputList(list);
//   };

//   // remove button event
//   const handleRemoveClick = (index) => {
//     const list = [...inputList];
//     list.splice(index, 1);
//     setInputList(list);
//   };

//   // add button event
//   const handleAddClick = () => {
//     setInputList([...inputList, { dimension: "", value: "" }]);
//   };

//   return (
//     <div className={classes.root}>
//       <Col md={3}></Col>
//       <Col md={9}>
//         <h4>Create a listing</h4>
//         <Form>
//           <FormGroup>
//             <Label htmlFor="exampleInputTitle">Title</Label>
//             <TitleInput
//               id="exampleInputTitle"
//               placeholder="Denim button-down shirt"
//             />
//           </FormGroup>
//           <FormGroup>
//             <Autocomplete
//               id="category"
//               options={categories}
//               getOptionLabel={(option) => option.category}
//               renderInput={(params) => (
//                 <TextField
//                   {...params}
//                   variant="outlined"
//                   label="Category"
//                   placeholder="unknown"
//                 />
//               )}
//             />
//           </FormGroup>
//           <FormGroup>
//             <Autocomplete
//               id="size"
//               options={sizes}
//               getOptionLabel={(option) => option.size}
//               renderInput={(params) => (
//                 <TextField
//                   {...params}
//                   variant="outlined"
//                   label="Size"
//                   placeholder="unspecified"
//                 />
//               )}
//             />
//           </FormGroup>
//           <FormGroup>
//             <Label>Photos</Label>
//             <FileInput />
//           </FormGroup>
//           <FormGroup>
//             <Autocomplete
//               multiple
//               limitTags={2}
//               id="multiple-limit-tags"
//               options={styles}
//               getOptionLabel={(option) => option.style}
//               defaultValue={[styles[0], styles[1]]}
//               renderInput={(params) => (
//                 <TextField
//                   {...params}
//                   variant="outlined"
//                   label="Styles"
//                   placeholder="Styles"
//                 />
//               )}
//             />
//           </FormGroup>
//           <FormGroup>
//             <Autocomplete
//               id="condition"
//               options={condition}
//               getOptionLabel={(option) => option.condition}
//               renderInput={(params) => (
//                 <TextField
//                   {...params}
//                   variant="outlined"
//                   label="Condition"
//                   placeholder="unspecified"
//                 />
//               )}
//             />
//           </FormGroup>
//           <FormGroup>
//             <Autocomplete
//               id="size"
//               options={sizes}
//               getOptionLabel={(option) => option.size}
//               renderInput={(params) => (
//                 <TextField
//                   {...params}
//                   variant="outlined"
//                   label="Size"
//                   placeholder="unspecified"
//                 />
//               )}
//             />
//           </FormGroup>
//           <FormGroup>
//             <Label>Description</Label>
//             <TextArea
//               placeholder="Add any details"
//               onChange={() => console.log(this.value)}
//             />
//           </FormGroup>
//           <FormGroup>
//             <label className="sr-only" for="exampleInputAmount">
//               Price
//             </label>
//             <div className="input-group">
//               <div className="input-group-addon">$</div>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="exampleInputAmount"
//                 placeholder="Amount"
//               />
//             </div>
//           </FormGroup>

//           <FormGroup>
//             Dimensions
//             <div className="dimensions">
//               {inputList.map((x, i) => {
//                 return (
//                   <div className="box">
//                     <Autocomplete
//                       id="dimensions"
//                       options={dimensions}
//                       getOptionLabel={(option) => option.dimension}
//                       name="dimension"
//                       //value={v}
//                       //onChange={(e, v) => handleInputChange(v, "")}
//                       renderInput={(params) => (
//                         <TextField
//                           {...params}
//                           variant="outlined"
//                           label="Dimension"
//                           placeholder="Dimension"
//                           //type="text"
//                         />
//                       )}
//                     />
//                     <input
//                       name="value"
//                       type="text"
//                       className="form-control"
//                       placeholder="0 cm"
//                       value={x.value}
//                       onChange={(e) => handleInputChange(e, i)}
//                     />
//                     <div className="btn-box">
//                       {inputList.length !== 1 && (
//                         <button
//                           className="btn btn-secondary mr-3"
//                           onClick={() => handleRemoveClick(i)}
//                         >
//                           Remove
//                         </button>
//                       )}
//                       {inputList.length - 1 === i && (
//                         <button
//                           className="btn btn-secondary"
//                           onClick={handleAddClick}
//                         >
//                           Add
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 );
//               })}
//               <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
//             </div>
//           </FormGroup>
//           <div className="btn-toolbar">
//             <button type="submit" className="btn btn-primary btn-md mr-3">
//               Add listing
//             </button>
//             <button type="submit" className="btn btn-primary btn-md">
//               Cancel
//             </button>
//             {/* <Button component={Link} to="/new/location/">
//               Cancel
//             <Button> */}
//           </div>
//         </Form>
//       </Col>
//     </div>
//   );
// }

// const dimensions = [
//   { dimension: "neck" },
//   { dimension: "shoulder" },
//   { dimension: "sleeve A" },
//   { dimension: "sleeve B" },
//   { dimension: "forearm" },
//   { dimension: "cuff" },
//   { dimension: "chest" },
//   { dimension: "waist" },
//   { dimension: "rise" },
//   { dimension: "inseam" },
//   { dimension: "hip" },
//   { dimension: "thigh" },
//   { dimension: "knee" },
//   { dimension: "hem" },
//   { dimension: "length" },
//   { dimension: "length A" },
//   { dimension: "length B" },
//   { dimension: "width" },
//   { dimension: "back" },
//   { dimension: "heel" },
//   { dimension: "platform" },
//   { dimension: "sole" },
//   { dimension: "height" },
//   { dimension: "rim" },
//   { dimension: "circumference" },
//   { dimension: "lense height" },
//   { dimension: "lense width" },
//   { dimension: "arm" },
//   { dimension: "bridge" },
//   { dimension: "collar depth" }
// ];

// //predefined list of style and trending "hashtags"
// const styles = [
//   { style: "cottagecore" },
//   { style: "trendy" },
//   { style: "preppy" },
//   { style: "bohemian" },
//   { style: "artsy" },
//   { style: "casual" },
//   { style: "smart casual" },
//   { style: "goth" },
//   { style: "punk" },
//   { style: "trendy" },
//   { style: "office" },
//   { style: "business formal" },
//   { style: "street style" },
//   { style: "retro" },
//   { style: "1950s" },
//   { style: "1920s" },
//   { style: "80s" },
//   { style: "2000s" },
//   { style: "vintage" },
//   { style: "skateboarder" },
//   { style: "normcore" },
//   { style: "peter pan collar" },
//   { style: "y2k" },
//   { style: "neon" },
//   { style: "embroidered" },
//   { style: "open-back" },
//   { style: "bell sleeves" },
//   { style: "ruffles" },
//   { style: "hypebeast" },
//   { style: "influencer" },
//   { style: "french chic" },
//   { style: "bella hadid" },
//   { style: "summer" },
//   { style: "floral" }
// ];

// const categories = [
//   { category: "shirt" },
//   { category: "pants" },
//   { category: "shorts" },
//   { category: "t-shirt" },
//   { category: "sweater" },
//   { category: "skirt" },
//   { category: "dress" },
//   { category: "boots" },
//   { category: "sneakers" },
//   { category: "heels" },
//   { category: "tank top" },
//   { category: "jeans" },
//   { category: "scarf" },
//   { category: "belt" },
//   { category: "hat" },
//   { category: "glasses" },
//   { category: "sunglasses" },
//   { category: "jacket" },
//   { category: "blazer" },
//   { category: "coat" },
//   { category: "bodysuit" },
//   { category: "leggings" },
//   { category: "hoodie" }
// ];

// const sizes = [
//   { size: "XXS / 00 US / 26 EUR / 1 UK" },
//   { size: "XXS / 0 US / 28 EUR / 2 UK" },
//   { size: "XS / 2 US/ 30 EUR / 4 UK" },
//   { size: "S / 4 US / 32 EUR / 6 UK" },
//   { size: "S / 6 US / 34 EUR / 8 UK" },
//   { size: "M / 8 US / 36 EUR / 10 UK" },
//   { size: "M / 10 US / 38 EUR / 12 UK" },
//   { size: "L / 12 US / 40 EUR / 14 UK" },
//   { size: "L / 14 US / 42 EUR / 16 UK" },
//   { size: "XL / 16 US / 44 EUR / 18 UK" },
//   { size: "1X / 18 US / 46 EUR / 20 UK" },
//   { size: "2X / 20 US / 48 EUR / 22 UK" },
//   { size: "3X / 22 US / 50 EUR / 23 UK" },
//   { size: "4 US / 34.5 EUR / 1.5 UK" },
//   { size: "4.5 US / 35 EUR / 2 UK" },
//   { size: "5 US / 35.5 EUR / 2.5 UK" },
//   { size: "5.5 US / 36 EUR / 3 UK" },
//   { size: "6 US / 36.5 EUR / 3.5 UK" },
//   { size: "6.5 US / 37 EUR / 4 UK" },
//   { size: "7 US / 37.5 EUR / 4.5 UK" },
//   { size: "7.5 US / 38 EUR / 5 UK" },
//   { size: "8 US / 38.5 EUR / 5.5 UK" },
//   { size: "8.5 US / 39 EUR / 6 UK" },
//   { size: "9 US / 39.5 EUR / 6.5 UK" },
//   { size: "9.5 US / 40 EUR / 7 UK" },
//   { size: "10 US / 40.5 EUR / 7.5 UK" },
//   { size: "10.5 US / 41 EUR / 8 UK" },
//   { size: "11 US / 41.5 EUR / 8.5 UK" },
//   { size: "11.5 US / 42 EUR / 9 UK" },
//   { size: "12 US / 42.5 EUR / 9.5 UK" },
//   { size: "12.5 US / 43 EUR / 10 UK" },
//   { size: "13 US / 44.5 EUR / 10.5 UK" },
//   { size: "13.5 US / 5 EUR / 11 UK" },
//   { size: "14 US / 45.5 EUR / 11.5 UK" },
//   { size: "00" },
//   { size: "0" },
//   { size: "23" },
//   { size: "24" },
//   { size: "25" },
//   { size: "26" },
//   { size: "27" },
//   { size: "28" },
//   { size: "29" },
//   { size: "30" },
//   { size: "31" },
//   { size: "32" },
//   { size: "33" },
//   { size: "34" },
//   { size: "35" },
//   { size: "36" },
//   { size: "38" },
//   { size: "39" },
//   { size: "40" },
//   { size: "41" },
//   { size: "42" },
//   { size: "43" },
//   { size: "44" },
//   { size: "45" },
//   { size: "46" },
//   { size: "onesize" },
//   { size: "S/M" },
//   { size: "M/L" }
// ];

// const fit = [
//   { fit: "skin tight" },
//   { fit: "slim" },
//   { fit: "fitted" },
//   { fit: "regular" },
//   { fit: "slim" },
//   { fit: "relaxed/ loose" },
//   { fit: "oversized" },
//   { fit: "super oversized" },
//   { fit: "cropped" },
//   { fit: "long" },
//   { fit: "flowy" }
// ];

// const jeans = [
//   { style: "bell bottoms" },
//   { style: "flare" },
//   { style: "cropped" },
//   { style: "jegging" },
//   { style: "skinny" },
//   { style: "slim" },
//   { style: "straight" },
//   { style: "wide-leg" },
//   { style: "puddle" },
//   { style: "culotte" },
//   { style: "bermuda" },
//   { style: "short" },
//   { style: "long" },
//   { style: "petite" }
// ];

// const brand = [
//   { brand: "unknown" },
//   { brand: "vintage" },
//   { brand: "artisan" },
//   { brand: "hand-made" },
//   { brand: "adidas" },
//   { brand: "nike" },
//   { brand: "reebok" },
//   { brand: "dr. martens" },
//   { brand: "vans" },
//   { brand: "converse" },
//   { brand: "cole haan" },
//   { brand: "sam edelman" },
//   { brand: "zara" },
//   { brand: "h&m" },
//   { brand: "abercrombie" },
//   { brand: "dynamite" },
//   { brand: "aritzia" },
//   { brand: "simons" },
//   { brand: "lack of color" },
//   { brand: "bailey" },
//   { brand: "uniqlo" },
//   { brand: "muji" },
//   { brand: "rouje" },
//   { brand: "maje" },
//   { brand: "sandro" },
//   { brand: "zadig & volitare" },
//   { brand: "primark" },
//   { brand: "shein" },
//   { brand: "walmart" },
//   { brand: "tibi" },
//   { brand: "chanel" },
//   { brand: "gucci" },
//   { brand: "dickies" },
//   { brand: "céline" },
//   { brand: "ysl" },
//   { brand: "balenciaga" },
//   { brand: "chloé" },
//   { brand: "see by chloé" },
//   { brand: "circus by sam edelman" },
//   { brand: "fendi" },
//   { brand: "berluti" },
//   { brand: "comme des garçons" },
//   { brand: "brioni" },
//   { brand: "canada goose" },
//   { brand: "moose knuckles" },
//   { brand: "mackage" },
//   { brand: "soia & kyo" },
//   { brand: "calvin klein" },
//   { brand: "la vie en rose" },
//   { brand: "la senza" },
//   { brand: "guess" },
//   { brand: "tory burch" },
//   { brand: "rudsak" },
//   { brand: "prada" },
//   { brand: "dior" },
//   { brand: "louis vuitton" },
//   { brand: "dkny" },
//   { brand: "kenzo" },
//   { brand: "givenchy" },
//   { brand: "dolce & gabbana" },
//   { brand: "ganni" },
//   { brand: "alexander mqueen" },
//   { brand: "topshop" },
//   { brand: "valentino" },
//   { brand: "mango" },
//   { brand: "lanvin" },
//   { brand: "sézane" },
//   { brand: "diane von furstenberg" },
//   { brand: "roberto cavalli" },
//   { brand: "versace" },
//   { brand: "ralph lauren" },
//   { brand: "gap" },
//   { brand: "banana republic" },
//   { brand: "madewell" },
//   { brand: "old navy" },
//   { brand: "levis" },
//   { brand: "asos" },
//   { brand: "boohoo" },
//   { brand: "pretty little thing" },
//   { brand: "galliano" },
//   { brand: "giorgo armani" },
//   { brand: "vivienne westwood" },
//   { brand: "alexa chung" },
//   { brand: "nanushka" },
//   { brand: "tiffany & co" },
//   { brand: "river island" },
//   { brand: "anna sui" },
//   { brand: "snidel" },
//   { brand: "juicy couture" },
//   { brand: "castaner" },
//   { brand: "head" },
//   { brand: "hermès" },
//   { brand: "bvlgari" },
//   { brand: "marc jacobs" },
//   { brand: "lacoste" },
//   { brand: "hugo boss" },
//   { brand: "burberry" },
//   { brand: "miumiu" },
//   { brand: "under armour" },
//   { brand: "swarovski" },
//   { brand: "burton" },
//   { brand: "helly hansen" },
//   { brand: "michael kors" },
//   { brand: "lululemon" },
//   { brand: "max mara" },
//   { brand: "nine west" },
//   { brand: "call it spring" },
//   { brand: "ugg" },
//   { brand: "hoka" },
//   { brand: "asics" },
//   { brand: "salvatore ferragamo" },
//   { brand: "tom ford" },
//   { brand: "lisa says gah" },
//   { brand: "moncler" },
//   { brand: "bally" },
//   { brand: "vera wang" },
//   { brand: "sketchers" },
//   { brand: "american eagle" },
//   { brand: "aerie" },
//   { brand: "longchamp" },
//   { brand: "bcbg maxazria" },
//   { brand: "bogner" },
//   { brand: "kate spade" },
//   { brand: "sisley" },
//   { brand: "tods" },
//   { brand: "toms" },
//   { brand: "eddie bauer" },
//   { brand: "esprit" },
//   { brand: "karen millen" },
//   { brand: "monsoon" },
//   { brand: "mec" },
//   { brand: "kate spade" },
//   { brand: "ted baker" },
//   { brand: "christian louboutin" },
//   { brand: "furla" },
//   { brand: "fossil" },
//   { brand: "paul smith" },
//   { brand: "pepe jeans" },
//   { brand: "st. john" },
//   { brand: "woolrich" },
//   { brand: "birkenstock" },
//   { brand: "express" },
//   { brand: "coach" },
//   { brand: "cartier" },
//   { brand: "victoria's secret" },
//   { brand: "pink" },
//   { brand: "ray-ban" },
//   { brand: "puma" },
//   { brand: "the north face" },
//   { brand: "pandora" },
//   { brand: "omega" },
//   { brand: "tommy kilfiger" },
//   { brand: "american apparel" },
//   { brand: "berksha" },
//   { brand: "bottega veneta" },
//   { brand: "swatch" },
//   { brand: "tissot" },
//   { brand: "spyder" },
//   { brand: "stradivarius" },
//   { brand: "massimo dutti" },
//   { brand: "club monaco" }
// ];

// const condition = [
//   { condition: "new with tags" },
//   { condition: "new without tags" },
//   { condition: "used - like new" },
//   { condition: "used" },
//   { condition: "used with defects" },
//   { condition: "fair" },
//   { condition: "vintage" }
// ];
