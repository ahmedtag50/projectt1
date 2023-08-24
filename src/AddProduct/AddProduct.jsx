// import React, { useState } from 'react';

// import '../AddProduct/AddProduct.css';

// const inputFields = [
//     { label: 'اسم المنتج', state: 'productName', type: 'text', placeholder: 'أدخل اسم المنتج' },
//     { label: 'اسم الشركة', state: 'productCompany', type: 'text', placeholder: 'أدخل اسم الشركة' },
//     { label: 'كمية المنتج', state: 'productQuantity', type: 'text', placeholder: 'أدخل كمية المنتج' },
//     { label: 'نوع المنتج', state: 'productType', type: 'text', placeholder: 'أدخل نوع المنتج' },
//     { label: 'سعر البيع', state: 'sellingPrice', type: 'text', placeholder: 'أدخل سعر البيع' },
//     { label: 'سعر الشراء', state: 'buyingPrice', type: 'text', placeholder: 'أدخل سعر الشراء' },
//     { label: 'تفاصيل المنتج', state: 'productDetails', type: 'text', placeholder: 'أدخل تفاصيل المنتج' },
//     { label: 'أقصى كمية متاحة', state: 'maxQuantity', type: 'text', placeholder: 'أدخل أقصى كمية متاحة' }
// ];

// export default function AddProductsPage ()
// {
//     const [ selectedImage, setSelectedImage ] = useState( null );
//     const [ formData, setFormData ] = useState( {} );
//     const [ products, setProducts ] = useState( [] );

//     const handleImageUpload = ( event ) =>
//     {
//         setSelectedImage( URL.createObjectURL( event.target.files[ 0 ] ) );
//     };

//     const handleInputChange = ( event, field ) =>
//     {
//         const { value } = event.target;
//         setFormData( ( prevState ) => ( { ...prevState, [ field ]: value } ) );
//     };

//     const handleAddProduct = () =>
//     {
//         const newProduct = {
//             ...formData,
//             selectedImage: selectedImage,
//         };

//         setProducts( ( prevProducts ) => [ ...prevProducts, newProduct ] );

//         setFormData( {} );
//         setSelectedImage( null );
//     };

//     return (
//         <div className="add-products-page">
//             <h1>إضافة منتج</h1>
//             { inputFields.map( ( field, index ) => (
//                 <div className="input-group" key={ index }>
//                     <label>{ field.label }</label>
//                     <input
//                         type={ field.type }
//                         placeholder={ field.placeholder }
//                         value={ formData[ field.state ] || '' }
//                         onChange={ ( e ) => handleInputChange( e, field.state ) }
//                     />
//                 </div>
//             ) ) }
//             <div style={ { display: 'flex', justifyContent: 'space-between', width: "94%" } }>
//                 <div style={ { display: 'flex', flexDirection: 'column', justifyContent: 'space-between' } }>
//                     <input type="file" accept="image/*" onChange={ handleImageUpload } style={ { width: "100%" } } />
//                     <div className="button-group" >
//                         <button className="add-button" onClick={ handleAddProduct }>
//                             إضافة
//                         </button>
//                         <button className="cancel-button">إلغاء</button>
//                     </div>
//                 </div>
//                 { selectedImage && <img src={ selectedImage } alt="صورة " /> }
//             </div>
//         </div>
//     );
// }

import React from 'react'

const AddProduct = () => {
  return (
    <div>AddProduct</div>
  )
}

export default AddProduct
