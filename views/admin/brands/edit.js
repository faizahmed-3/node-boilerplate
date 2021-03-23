const layout = require('../layout');
const title = 'Edit Brand';

module.exports = ({brand}) => {
    return layout({
        title: title,
        content: `

        <div id="add-product" class="container card my-5">
    <div class="card-header">
        Brand Information
    </div>
    <div class="card-body">
        <form method="POST" action="/admin/brands/edit/${brand.id}">
            <div class="mb-3 form-group">
                <label for="name" class="form-label">Brand Name</label>
                <input name="name" value="${brand.brandName}" type="text" class="form-control" id="name" aria-describedby="Brand name">
            </div>
            <div class="my-3 d-flex justify-content-evenly">
                <button class="btn btn-success save" type="submit" value="submit">SAVE</button>
                <button class="btn btn-warning save">SAVE AND CREATE COPY</button>
            </div>
        </form>
    </div>
</div>
        `})
}