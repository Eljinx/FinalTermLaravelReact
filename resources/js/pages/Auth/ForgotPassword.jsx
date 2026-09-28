import { Head, Link, useForm } from '@inertiajs/react';

export default function ForgotPassword() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post('/forgot-password');
    };

    return (
        <>
            <Head title="Forgot Password" />

            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">
                    <h1 className="text-2xl font-bold mb-2">
                        Forgot Password
                    </h1>

                    <p className="text-gray-600 mb-6">
                        Enter your email address and we'll send you a
                        password reset link.
                    </p>

                    <form onSubmit={submit}>
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block mb-1 font-medium"
                            >
                                Email
                            </label>

                            <input
                                id="email"
                                type="email"
                                value={data.email}
                                onChange={(e) =>
                                    setData('email', e.target.value)
                                }
                                className="w-full border rounded px-3 py-2"
                            />

                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
                        >
                            {processing
                                ? 'Sending...'
                                : 'Send Reset Link'}
                        </button>
                    </form>

                    <p className="text-center mt-6 text-gray-600">
                        Remember your password?{' '}
                        <Link
                            href="/login"
                            className="text-blue-600 hover:underline"
                        >
                            Back to Login
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}
