import React from "react";

export function Polygon1({ }) {
    return <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
        }} className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
    </div>;
}

export function Polygon2({ }) {
    return (<div aria-hidden="true" className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] ">
        <div style={{
            clipPath: 'polygon(68.3% 47.8%, 99.1% 58.2%, 93.7% 22.4%, 81.5% 3.9%, 78.2% 5.7%, 69.8% 35.1%, 59.4% 66.3%, 50.9% 69.7%, 46.3% 55.9%, 42.7% 32.2%, 30.1% 79.5%, 3.2% 60.8%, 21.4% 97.2%, 29.5% 74.6%, 78.6% 95.3%, 68.3% 47.8%)'
        }} className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
    </div>);
}

export function Polygon3({ }) {
    return (<div aria-hidden="true" className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div
            style={{
                clipPath:
                    'polygon(75% 20%, 100% 40%, 85% 60%, 90% 80%, 65% 100%, 50% 85%, 35% 100%, 10% 80%, 15% 60%, 0% 40%, 25% 20%, 50% 0%)',
            }}
            className="relative left-[calc(50%+5rem)] aspect-1155/470 w-[50rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[100rem]"
        />
    </div>);
}

