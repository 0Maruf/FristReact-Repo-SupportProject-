import React from 'react';

const Subscribtion = () => {
    return (
        <div className="py-16 bg-gray-50">
            <p className="font-bold text-3xl text-center mb-2">
                What deal suit you perfect
            </p>
            <p className="text-center mb-6 text-gray-600">Meet our pricing plan</p>

       
            <div className="flex justify-center items-center gap-3 mb-10">
                <p>Monthly Plan</p>
                <input
                    type="checkbox"
                    defaultChecked
                    className="toggle toggle-secondary"
                />
                <p>Annual Plan</p>
            </div>

            {/* ✅ Grid container  */}
            <div className="grid grid-cols-1 md:grid-cols-3 w-[90%] mx-auto justify-items-center">
                {/* card 1 */}
                <div className="card w-80 bg-base-100 shadow-md hover:shadow-lg transition-all">
                    <div className="card-body">
                        <span className="badge badge-xs badge-warning">Most Popular</span>
                        <div className="flex justify-between">
                            <h2 className="text-3xl font-bold">Premium</h2>
                            <span className="text-xl">$29/mo</span>
                        </div>
                        <ul className="mt-6 flex flex-col gap-2 text-sm">
                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4 me-2 inline-block text-success"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                High-resolution image generation
                            </li>
                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4 me-2 inline-block text-success"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                Customizable style templates
                            </li>
                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4 me-2 inline-block text-success"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                Batch processing capabilities
                            </li>
                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4 me-2 inline-block text-success"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                AI-driven image enhancements
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className="btn btn-primary btn-block">Subscribe</button>
                        </div>
                    </div>
                </div>

                {/* card 2 */}
                <div className="card w-80 bg-base-100 shadow-md hover:shadow-lg transition-all">
                    <div className="card-body">
                        <span className="badge badge-xs badge-warning">Best Value</span>
                        <div className="flex justify-between">
                            <h2 className="text-3xl font-bold">Standard</h2>
                            <span className="text-xl">$19/mo</span>
                        </div>
                        <ul className="mt-6 flex flex-col gap-2 text-sm">
                            <li>All core features</li>
                            <li>Basic reports</li>
                            <li>Email support</li>
                            <li>Secure hosting</li>
                        </ul>
                        <div className="mt-6">
                            <button className="btn btn-outline btn-block">Subscribe</button>
                        </div>
                    </div>
                </div>

                {/* card 3 */}
                <div className="card w-80 bg-base-100 shadow-md hover:shadow-lg transition-all">
                    <div className="card-body">
                        <span className="badge badge-xs badge-warning">Starter</span>
                        <div className="flex justify-between">
                            <h2 className="text-3xl font-bold">Basic</h2>
                            <span className="text-xl">$9/mo</span>
                        </div>
                        <ul className="mt-6 flex flex-col gap-2 text-sm">
                            <li>Limited features</li>
                            <li>Email support</li>
                            <li>Basic analytics</li>
                        </ul>
                        <div className="mt-6">
                            <button className="btn btn-outline btn-block">Free Trail</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribtion;
