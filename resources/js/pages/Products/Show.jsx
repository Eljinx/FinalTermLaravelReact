import { Link } from '@inertiajs/react';

export default function Show({ product }) {
    return (
        <div>
            <h1>Product Details</h1>

            <div>
                <strong>ID:</strong>
                <p>{product.id}</p>
            </div>

            <div>
                <strong>Name:</strong>
                <p>{product.name}</p>
            </div>

            <div>
                <strong>Category:</strong>
                <p>
                    {product.category?.name ?? 'No Category'}
                </p>
            </div>

            <div>
                <strong>Description:</strong>
                <p>
                    {product.description || 'No description'}
                </p>
            </div>

            <div>
                <strong>Price:</strong>
                <p>₱{product.price}</p>
            </div>

            <div>
                <strong>Stock:</strong>
                <p>{product.stock}</p>
            </div>

            <br />

            <Link href={`/product/products/${product.id}/edit`}>
                Edit
            </Link>

            {' | '}

            <Link href="/product/products">
                Back to Products
            </Link>
        </div>
    );
}
