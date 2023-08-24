import '../ShowProduct/ShowProduct.css';

export default function ShowProductsPage ()
{
    return (
        <div className="show-products-page">
            <h1> المنتجات</h1>
            <table className="product-table">
                <thead>
                    <tr>
                        <th>اسم المنتج</th>
                        <th>اسم الشركة</th>
                        <th>كمية المنتج</th>
                        <th>نوع المنتج</th>
                        <th>سعر الشراء</th>
                        <th>سعر البيع</th>
                        <th> ###</th>
                        <th>أقصى كمية متاحة</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>جبنة فيتا </td>
                        <td>عبور لاند</td>
                        <td>1000</td>
                        <td>جملة</td>
                        <td>20 جنية</td>
                        <td>22 جنية</td>
                        <td>###</td>
                        <td>20000</td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
}

