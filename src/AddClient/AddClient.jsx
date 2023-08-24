import React, { useState } from 'react';
import '../AddClient/AddClient.css';

const inputFields = [
    { label: 'اسم العميل', state: 'clientName', type: 'text', placeholder: 'أدخل اسم العميل' },
    { label: ' رقم التليفون', state: 'phoneNumber', type: 'text', placeholder: 'أدخل رقم التليفون' },
    { label: 'اسم المحل', state: 'storeName', type: 'text', placeholder: 'أدخل اسم المحل ' },
    { label: 'العنوان', state: 'address', type: 'text', placeholder: 'أدخل عنوان العميل ' },
    { label: 'اسم المنطقة', state: 'sellingPrice', type: 'text', placeholder: 'أدخل اسم المنطقة' },
];

export default function AddClientsPage ()
{
    const [ formData, setFormData ] = useState( {} );
    const [ products, setProducts ] = useState( [] );

    const handleInputChange = ( event, field ) =>
    {
        const { value } = event.target;
        setFormData( ( prevState ) => ( { ...prevState, [ field ]: value } ) );
    };

    const handleAddProduct = () =>
    {
        const newProduct = {
            ...formData,
        };

        setProducts( ( prevProducts ) => [ ...prevProducts, newProduct ] );

        setFormData( {} );
    };

    return (
        <div className="add-client-page">
            <h1>إضافة عميل</h1>
            { inputFields.map( ( field, index ) => (
                <div className="input-group" id="client-group" key={ index }>
                    <label>{ field.label }</label>
                    <input
                        type={ field.type }
                        placeholder={ field.placeholder }
                        value={ formData[ field.state ] || '' }
                        onChange={ ( e ) => handleInputChange( e, field.state ) }
                    />
                </div>
            ) ) }
            <div style={ { width: "100%", display: "flex", justifyContent: "flex-end" } }>
                <div className="button-group" id="button-group" >
                    <button className="add-button" onClick={ handleAddProduct }>
                        إضافة
                    </button>
                    <button className="cancel-button">إلغاء</button>
                </div>
            </div>
        </div>
    );
}
