import React from "react";

type Props = {
    className: string;
    label: string;
    onClick: Function;
};

export default function ButtonSecondary({ label = "label", onClick }: Props) {
    return (
        <button
            type="button"
            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={() => onClick()}
        >
            {label}
        </button>
    );
}