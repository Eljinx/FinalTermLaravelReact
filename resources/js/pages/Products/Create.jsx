import { Link, useForm } from '@inertiajs/react';

export default function Create({ categories }) {

    const { data, setData, post, processing, errors } = useForm({
        product_category_id: '',
        name: '',
        description: '',
        price: '',
        stock: '',
    });

    function submit(e) {
        e.preventDefault();

        post('/product/products');
    }

    return (
        <div>
            <h1>Create Product</h1>

            <form onSubmit={submit}>

                <div>
                    <label>Name</label>

                    <input
                        type="text"
                        value={data.name}
                        onChange={e =>
                            setData('name', e.target.value)
                        }
                    />

                    {errors.name && <p>{errors.name}</p>}
                </div>

                <div>
                    <label>Category</label>

                    <select
                        value={data.product_category_id}
                        onChange={e =>
                            setData(
                                'product_category_id',
                                e.target.value
                            )
                        }
                    >
                        <option value="">
                            Select Category
                        </option>

                        {categories.map(category => (
                            <option
                                key={category.id}
                                value={category.id}
                            >
                                {category.name}
                            </option>
                        ))}
                    </select>

                    {errors.product_category_id && (
                        <p>{errors.product_category_id}</p>
                    )}
                </div>

                <div>
                    <label>Price</label>

                    <input
                        type="number"
                        value={data.price}
                        onChange={e =>
                            setData('price', e.target.value)
                        }
                    />
                </div>

                <div>
                    <label>Stock</label>

                    <input
                        type="number"
                        value={data.stock}
                        onChange={e =>
                            setData('stock', e.target.value)
                        }
                    />
                </div>

                <div>
                    <label>Description</label>

                    <textarea
                        value={data.description}
                        onChange={e =>
                            setData('description', e.target.value)
                        }
                    />
                </div>

                <button type="submit" disabled={processing}>
                    {processing ? 'Saving...' : 'Save'}
                </button>
            </form>

            <br />

            <Link href="/product/products">
                Back
            </Link>
        </div>
    );
}