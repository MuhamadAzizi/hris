import Link from "next/link";

export default function Sidebar() {
    return (
        <div class="sidebar-wrapper">
            <div class="sidebar sidebar-collapse" id="sidebar">
                <div class="sidebar__menu-group">
                    <ul class="sidebar_nav">
                        <li class="menu-title mt-30">
                            <span>Dashboard</span>
                        </li>
                        <li class="has-child">
                            <a href="#" class="">
                                <span class="nav-icon uil uil-envelope"></span>
                                <span class="menu-text">Employee</span>
                                <span class="toggle-icon"></span>
                            </a>
                            <ul>
                                <li class="">
                                    <a href="inbox.html">Inbox</a>
                                </li>
                                <li class="">
                                    <a href="read-email.html">Read
                                        Email</a>
                                </li>
                            </ul>
                        </li>
                        <li class="has-child">
                            <a href="#" class="">
                                <span class="nav-icon uil uil-bag"></span>
                                <span class="menu-text text-initial">Leave</span>
                                <span class="toggle-icon"></span>
                            </a>
                            <ul>
                                <li class="">
                                    <a href="products.html">Products</a>
                                </li>
                                <li class="">
                                    <a href="product-details.html">Product
                                        Details</a>
                                </li>
                                <li class="">
                                    <a href="add-product.html">Product
                                        Add</a>
                                </li>
                                <li class="">
                                    <a href="add-product.html">Product
                                        Edit</a>
                                </li>
                                <li class="">
                                    <a href="cart.html">Cart</a>
                                </li>
                                <li class="">
                                    <a href="order.html">Orders</a>
                                </li>
                                <li class="">
                                    <a href="sellers.html">Sellers</a>
                                </li>
                                <li class="">
                                    <a href="invoice.html">Invoices</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}