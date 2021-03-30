const {displayDate} = require('../../../middlewares/otherFunctions');
const layout = require('../layout');
const title = 'View special'

module.exports = ({specialcategory}) => {
    const renderedspecialcategory = specialcategory.map(
        special => {
            return `<tr>
    <td>${special.specialCategoriesName}</td>
    <td>${displayDate(special.dateCreated)}</td>
    <td>
        <a href="/admin/specialCategories/edit/${special._id}"><i class="far fa-edit"></i></a>
        <form method="POST" action="/admin/specialCategories/delete/${special._id}" class="deleteForm ms-4">
            <button type="submit" value="submit" class="deleteBtn">
                <i class="far fa-trash-alt "></i>
            </button>
        </form>
    </td>
</tr>
            `}).join('')

    return layout({
        title: title,
        content: `<div id="viewProducts" class="card ">
    <div class="card-body table-responsive-md">
        <table class="table table-hover table-bordered border-dark">
            <thead>
            <tr class="table-dark">
                <th scope="col" class="tableHeaderName">Brand Name</th>
                <th scope="col" class="tableHeader">Date Created</th>
                <th scope="col" class="tableHeader">Actions</th>
            </tr>
            </thead>
            <tbody>
            ${renderedspecialcategory}
            </tbody>
        </table>
    </div>
</div>`})
}