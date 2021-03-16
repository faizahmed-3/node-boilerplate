module.exports = ({content}) => {
    return `
        <!DOCTYPE html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="format-detection" content="telephone=no">

    <!--    Favicon -->
    <link rel="icon" href="img/favicon.ico">

    <!--    Fonts -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Montserrat&display=swap"
          rel="stylesheet">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="bootstrap/dist/css/bootstrap.min.css">

    <!--    Custom CSS -->
    <link rel="stylesheet" href="css/custom.css">

    <!--    Font Awesome -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css"
          integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossorigin="anonymous">

    <!--    Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">

    <!--    Chart JS-->
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js"></script>

    <title>Products | Amazon Cellular</title>
</head>
<body>

<!--Pre Loader-->
<div class="loader">
    <img src="../img/loader.gif" alt="Loading...">
</div>

<!--Admin Layout-->
<section id="admin">
    <!--    Sidebar-->
    <div class="sidebar border border-end ">
        <div class="text-center mt-2 sidebarItem"><img src="../img/logo.jpg" alt="Logo" class="img-fluid">
        </div>
        <div class="sidebarItem ">
            <ul class="list-group list-group-flush">
                <li class="list-group-item list-group-item-action  active">
                    <i class="fas fa-tachometer-alt"></i> Dashboard
                </li>
                <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                    <div><i class="fas fa-cart-plus"></i>Orders</div>
                    <span class="badge bg-danger rounded-pill">14</span></li>
                <li class="list-group-item list-group-item-action" type="button" data-bs-toggle="collapse"
                    data-bs-target="#productsList" aria-expanded="false" aria-controls="productsList">
                    <i class="fas fa-store-alt"></i>Products<i class="fas fa-caret-down ms-1"></i></li>
                <div class="collapse collapseMenu" id="productsList">
                    <div class="card card-body">
                        <ul class="mt-0 px-0">
                            <li class="list-group-item list-group-item-action " onclick="location.href='products.html'">Add Product</li>
                            <li class="list-group-item list-group-item-action ">Featured Products</li>
                            <li class="list-group-item list-group-item-action ">New Arrivals</li>
                            <li class="list-group-item list-group-item-action ">Sale</li>
                            <li class="list-group-item list-group-item-action ">Phones List</li>
                            <li class="list-group-item list-group-item-action ">Brands</li>
                            <li class="list-group-item list-group-item-action ">Cases</li>
                            <li class="list-group-item list-group-item-action ">Protectors</li>
                            <li class="list-group-item list-group-item-action ">Power</li>
                            <li class="list-group-item list-group-item-action ">Audio</li>
                            <li class="list-group-item list-group-item-action ">Smart Watch</li>
                            <li class="list-group-item list-group-item-action ">Camera Accessories</li>
                            <li class="list-group-item list-group-item-action ">Car Accessories</li>
                            <li class="list-group-item list-group-item-action ">Computer Accessories</li>
                            <li class="list-group-item list-group-item-action ">TV Accessories</li>
                            <li class="list-group-item list-group-item-action ">Other Categories</li>
                        </ul>
                    </div>
                </div>
                <li class="list-group-item list-group-item-action ">
                    <i class="fas fa-chart-line"></i> Reports
                </li>
                <li class="list-group-item list-group-item-action ">
                    <i class="fas fa-users"></i> Customers
                </li>
                <li class="list-group-item list-group-item-action ">
                    <i class="fas fa-user-cog"></i> Admins
                </li>
            </ul>
        </div>
    </div>

    <!--    Main Panel-->
    <div class="mainPanel">
        <!--        Navbar-->
        <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom">
            <div class="container-fluid">
                <button class="btn btn-primary rounded-circle" id="sidebarToggle"><i class="fas fa-plus"></i></button>
                <a class="navbar-brand" href="#">Add Product</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <button class="btn btn-primary addBtn" onclick="location.href='products.html'">Add Product</button>
                        </li>
                        <li class="nav-item notiCount">
                            <i class="bi bi-bell notification"><span class="tip">4</span></i>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                Faiz Ahmed
                            </a>
                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Profile</a></li>
                                <li><a class="dropdown-item" href="#">Activity Log</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="#">Log Out</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <!--Recent Orders-->
        <div class="card order">
            <div class="card-header text-center">
                Recent Orders
            </div>
            <div class="card-body table-responsive-md">
                <table class="table table-striped table-bordered border-dark">
                    <thead>
                    <tr>
                        <th scope="col">Order ID</th>
                        <th scope="col">Order Date</th>
                        <th scope="col">Customer ID</th>
                        <th scope="col">Price (ksh.)</th>
                        <th scope="col" class="status text-center">Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>09.15am <span class="d-block"> 11/02/21</span></td>
                        <td>212</td>
                        <td>2500</td>
                        <td class="text-center">
                            <div class="btn btn-primary">New</div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>09.15am <span class="d-block"> 11/02/21</span></td>
                        <td>345</td>
                        <td>1000</td>
                        <td class="text-center">
                            <div class="btn btn-warning">In Transit</div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>09.15am <span class="d-block"> 11/02/21</span></td>
                        <td>192</td>
                        <td>850</td>
                        <td class="text-center">
                            <div class="btn btn-danger">Cancelled</div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>09.15am <span class="d-block"> 11/02/21</span></td>
                        <td>87</td>
                        <td>5000</td>
                        <td class="text-center">
                            <div class="btn btn-success">Delivered</div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>09.15am <span class="d-block"> 11/02/21</span></td>
                        <td>3</td>
                        <td>3125</td>
                        <td class="text-center">
                            <div class="btn btn-success">Delivered</div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                        <td>12.00pm <span class="d-block"> 08/01/21</span></td>
                        <td>230</td>
                        <td>500</td>
                        <td class="text-center">
                            <div class="btn btn-success">Delivered</div>
                        </td>
                    </tr>

                    </tbody>
                </table>
            </div>
        </div>

        <!--       Charts -->
        <div class="d-flex justify-content-between" id="chartsRow">
            <div class="chart-container">
                <canvas id="myChart"></canvas>
                <script>
                    let ctx = document.getElementById('myChart').getContext('2d');
                    let myChart = new Chart(ctx, {
                        type: 'line',
                        data: {
                            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                            datasets: [{
                                label: 'Sales',
                                data: [12, 19, 3, 5, 2, 3],
                                backgroundColor: [
                                    'rgba(255,211,99,0.2)'
                                ],
                                borderColor: [
                                    'rgba(255,211,99,1)'
                                ],
                                borderWidth: 1
                            }]
                        },
                        options: {
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }]
                            }
                        }
                    });
                </script>
            </div>

            <div class="chart-container">
                <canvas id="myChart2"></canvas>
                <script>
                    let ctx2 = document.getElementById('myChart2').getContext('2d');
                    let myChart2 = new Chart(ctx2, {
                        type: 'line',
                        data: {
                            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                            datasets: [{
                                label: 'Profit',
                                data: [3, 5, 8, 10, 11, 11],
                                backgroundColor: ['rgba(110,89,229,0.2)'],
                                borderColor: [
                                    'rgba(110,89,229, 1)'
                                ],
                                borderWidth: 1
                            }]
                        },
                        options: {
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }]
                            }
                        }
                    });
                </script>
            </div>

            <div class="chart-container">
                <canvas id="myChart3"></canvas>
                <script>
                    let ctx3 = document.getElementById('myChart3').getContext('2d');
                    let myChart3 = new Chart(ctx3, {
                        type: 'line',
                        data: {
                            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                            datasets: [{
                                label: 'Orders Volume',
                                data: [9, 10, 4, 3, 7, 8],
                                backgroundColor: ['rgba(235, 121, 73,0.2)'],
                                borderColor: [
                                    'rgba(235, 121, 73, 1)'
                                ],
                                borderWidth: 1
                            }]
                        },
                        options: {
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }]
                            }
                        }
                    });
                </script>
            </div>
        </div>

        <!--        Stats-->
        <div id="stats">
            <div class="row">
                <div class="card col">
                    <div class="card-body">
                        <h5 class="card-title">Costs</h5>
                        <div class="card-text">
                            <div class="firstRow">
                                <div class="statNum"><span>ksh.</span>28500</div>
                                <i class="fas fa-arrow-up profit"></i>
                            </div>
                            <p class="percentage profit">+8.3% <span>(last 7 days)</span></p>
                        </div>
                    </div>
                </div>
                <div class="card col">
                    <div class="card-body">
                        <h5 class="card-title">Page Visitors</h5>
                        <div class="card-text">
                            <div class="firstRow">
                                <div class="statNum">5000</div>
                                <i class="fas fa-arrow-up profit"></i>
                            </div>
                            <p class="percentage profit">+15% <span>(last 7 days)</span></p>
                        </div>
                    </div>
                </div>
                <div class="card col">
                    <div class="card-body">
                        <h5 class="card-title">Conversions</h5>
                        <div class="card-text">
                            <div class="firstRow">
                                <div class="statNum">300</div>
                                <i class="fas fa-arrow-up profit"></i>
                            </div>
                            <p class="percentage profit">+2.5% <span>(last 7 days)</span></p>
                        </div>
                    </div>
                </div>
                <div class="card col">
                    <div class="card-body">
                        <h5 class="card-title">Customers</h5>
                        <div class="card-text">
                            <div class="firstRow">
                                <div class="statNum">650</div>
                                <i class="fas fa-arrow-down loss"></i>
                            </div>
                            <p class="percentage loss">-0.5% <span>(last 7 days)</span></p>
                        </div>
                    </div>
                </div>
                <div class="card col">
                    <div class="card-body">
                        <h5 class="card-title">Products</h5>
                        <div class="card-text">
                            <div class="firstRow">
                                <div class="statNum">400</div>
                                <i class="fas fa-minus"></i>
                            </div>
                            <p class="percentage">0% <span>(last 7 days)</span></p>
                        </div>
                    </div>
                </div>

            </div>

        </div>

        <!--        Best performers-->
        <div class="card order">
            <div class="card-header text-center">
                Best Performers
            </div>
            <div class="card-body table-responsive-md">
                <table class="table table-striped table-bordered border-dark">
                    <thead>
                    <tr>
                        <th scope="col">Product ID</th>
                        <th scope="col" class="itemsTh">Name</th>
                        <th scope="col">Created on</th>
                        <th scope="col">Price (ksh.)</th>
                        <th scope="col">Units Sold</th>
                        <th scope="col">Sales Made</th>
                        <th scope="col">Units Left</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Nillkin Textured nylon fiber case for Apple iPhone 12 Mini</td>
                        <td>09.15am <span class="d-block"> 11/02/21</span></td>
                        <td>2500</td>
                        <td>400</td>
                        <td>212</td>
                        <td>60</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Nillkin Amazing 2-in-1 HD full screen tempered glass</td>
                        <td>09.15am <span class="d-block"> 11/02/21</span></td>
                        <td>1000</td>
                        <td>390</td>
                        <td>345</td>
                        <td>125</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Nillkin CamShield Pro cover case for Apple iPhone 12</td>
                        <td>09.15am <span class="d-block"> 11/02/21</span></td>
                        <td>850</td>
                        <td>323</td>
                        <td>192</td>
                        <td>35</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Nillkin Textured nylon fiber case for Apple iPhone 12 Mini</td>
                        <td>09.15am <span class="d-block"> 11/02/21</span></td>
                        <td>5000</td>
                        <td>287</td>
                        <td>87</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>Nillkin Amazing 2-in-1 HD full screen tempered glass</td>
                        <td>09.15am <span class="d-block"> 11/02/21</span></td>
                        <td>3125</td>
                        <td>249</td>
                        <td>3</td>
                        <td>65</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!--        Worst performers-->
        <div class="card order">
            <div class="card-header text-center">
                Worst Performers
            </div>
            <div class="card-body table-responsive-md">
                <table class="table table-striped table-bordered border-dark">
                    <thead>
                    <tr>
                        <th scope="col">Product ID</th>
                        <th scope="col" class="itemsTh">Name</th>
                        <th scope="col">Created on</th>
                        <th scope="col">Price (ksh.)</th>
                        <th scope="col">Units Sold</th>
                        <th scope="col">Sales Made</th>
                        <th scope="col">Units Left</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Nillkin Textured nylon fiber case for Apple iPhone 12 Mini</td>
                        <td>09.15am <span class="d-block"> 11/02/21</span></td>
                        <td>2500</td>
                        <td>400</td>
                        <td>212</td>
                        <td>60</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Nillkin Amazing 2-in-1 HD full screen tempered glass</td>
                        <td>09.15am <span class="d-block"> 11/02/21</span></td>
                        <td>1000</td>
                        <td>390</td>
                        <td>345</td>
                        <td>125</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Nillkin CamShield Pro cover case for Apple iPhone 12</td>
                        <td>09.15am <span class="d-block"> 11/02/21</span></td>
                        <td>850</td>
                        <td>323</td>
                        <td>192</td>
                        <td>35</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Nillkin Textured nylon fiber case for Apple iPhone 12 Mini</td>
                        <td>09.15am <span class="d-block"> 11/02/21</span></td>
                        <td>5000</td>
                        <td>287</td>
                        <td>87</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>Nillkin Amazing 2-in-1 HD full screen tempered glass</td>
                        <td>09.15am <span class="d-block"> 11/02/21</span></td>
                        <td>3125</td>
                        <td>249</td>
                        <td>3</td>
                        <td>65</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
</section>

<!--Footer-->
<section id="footer" class="container-fluid px-0">
    <div class="footer2 text-center p-2">
        &copy; Amazon Cellular <span id="copyright"> 2021</span>. All Rights Reserved.
    </div>
</section>


<!--Back to top -->
<a href="#" class="to-top">
    <i class="fas fa-chevron-up"></i>
</a>

<!-- Bootstrap Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossorigin="anonymous"></script>

<!--Custom JS -->
<script src="js/admin.js"></script>
</body>
</html>
`
}