const layout = require('../layout');
const title = 'All Products'

module.exports = ({products}) => {

    function visibility(status) {
        if (status){
          return `
            <input type="checkbox" name="status" class="visibilitySwitch" value="status" checked>
            <span class="slider round"></span>
          `
        } else {
            return `
            <input type="checkbox" name="status" class="visibilitySwitch" value="status">
            <span class="slider round"></span>
          `
        }
    }

    const renderedProducts = products.map(
        product => {
            return `
<tr>
    <td>${product.product_name}</td>
    <td>${product.quantity}</td>
    <td>${product.shop_price}</td>
    <td>${product.price}</td>
    <td>${product.discount_price}</td>
    <td>${product.unitsSold}</td>
    <td>${product.income}</td>
    <td>${product.status}
        <label class="switch">
            ${visibility(product.status)}
        </label>
    </td>
    <td >
        <a href="/admin/products/edit/${product._id}"><i class="far fa-edit"></i></a>
        <form method="POST" action="/admin/products/delete/${product._id}" class="deleteForm ms-4">
            <button type="submit" value="submit" class="formBtn">
            <i class="far fa-trash-alt "></i>
            </button>
        </form>
    </td>
</tr>
           `;
        }).join('');


    return layout({
        title: title,
        content: `        
        <div id="viewProducts" class="card ">
    <div class="card-body table-responsive-md">
        <table class="table table-hover table-bordered border-dark">
            <thead>
            <tr class="table-dark">
                <th scope="col" class="tableHeaderBig view_table_name">Product Name</th>
                <th scope="col" class="tableHeader">Quantity</th>
                <th scope="col" class="tableHeader">Shop Price</th>
                <th scope="col" class="tableHeader">Price</th>
                <th scope="col" class="tableHeader">Discount Price</th>
                <th scope="col" class="tableHeader">Units Sold</th>
                <th scope="col" class="tableHeader">Income</th>
                <th scope="col" class="tableHeader">Status</th>
                <th scope="col" class="tableHeader">Actions</th>
            </tr>
            </thead>
            <tbody>
            ${renderedProducts}
            </tbody>
        </table>
    </div>
</div>
`});
};