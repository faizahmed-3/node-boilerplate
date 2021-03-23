const layout = require('../layout');
const title = 'Add category';

module.exports = () => {
    return layout({
        title: title,
        content: `<div id="add-product" class="container card my-5">
    <div class="card-header">
        Category Information
    </div>
    <div class="card-body">
        <form method="POST" action="/admin/categories">
            <div class="mb-3 form-group">
                <label for="name" class="form-label">Category Name</label>
                <input name="name" type="text" class="form-control" id="name" aria-describedby="product name">
            </div>
            <div class="my-3 d-flex justify-content-evenly">
                <button class="btn btn-success save" type="submit" value="submit">SAVE</button>
                <button class="btn btn-warning save">SAVE AND CREATE COPY</button>
            </div>
        </form>
    </div>
</div>`})
}