import clsx from "clsx";
import React from "react";


// ini typescript buat props typenya apa
type ButtonProps = {
    variant : 'primary' | 'secondary' | 'danger';
    size : 'sm' | 'md' | 'lg'; 
    disabled? : boolean
    onClick : () => void // ini untuk fungsi yang hanya menjalankan suatu aksi tanpa perlu mengembalikan nilai.
    children? : React.ReactNode; //React.ReactNode adalah tipe yang sangat fleksibel untuk properti yang berisi konten React.
}

export function ButtonProps({variant = "primary", size = "sm", disabled = false, onClick, children}: ButtonProps){ // ini props kalo make export funct gaperlu React.FC
    const baseClass = "rounded-md font-medium transition duration-300 cursor-pointer"
    const variantClass = {
        primary: "bg-blue-500 text-white hover:bg-blue-600",
        secondary: "bg-gray-500 text-white hover:bg-gray-600",
        danger: "bg-red-500 text-white hover:bg-red-600"
    }

    const sizeClass = {
        sm: "px-2 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg"
    }

    return(
        <>
            <button className={clsx(baseClass, variantClass[variant], sizeClass[size], {"opacity-50 cursor-not-allowed": disabled},)}
            onClick={onClick}
            disabled={disabled}>
            {/* clsx itu fungsinya buat menampung dan mengelola class secara dinamis. Jadi, daripada menulis class secara manual dengan banyak if-else atau ternary operator, kita bisa pakai clsx untuk menyusun class secara lebih rapi dan efisien. */}
            {children}
            </button>
        </>
    )
}