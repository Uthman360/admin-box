"use client";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import "./table.css";
import Confirm from "../Confirm/Confirm";
import Link from "next/link";
import Image from "next/image";

const Table = ({ Interest }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [step, setStep] = useState(1);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure rendering only on client-side to fix hydration error
  }, []);

  const staticData = useMemo(
    () => [
      { name: "John Doe", email: "johndoe@example.com", phone: "+11234567890", country: "USA", age: 34, gender: "Male", interests: ["Power", "Agility"] },
      { name: "Jane Smith", email: "janesmith@example.com", phone: "+19876543210", country: "Canada", age: 28, gender: "Female", interests: ["Balance"] },
      { name: "Alice Johnson", email: "alicejohnson@example.com", phone: "+15555555555", country: "UK", age: 45, gender: "Other", interests: ["Strength", "Endurance"] },
      { name: "Bob Brown", email: "bobbrown@example.com", phone: "+16666666666", country: "Australia", age: 22, gender: "Male", interests: ["Power", "Agility", "Balance"] },
      { name: "Charlie Davis", email: "charliedavis@example.com", phone: "+17777777777", country: "Germany", age: 30, gender: "Female", interests: ["Power"] },
    ],
    []
  );

  const handlePopup = useCallback(() => setShowPopup(true), []);
  const handleClosePopup = useCallback(() => {
    setShowPopup(false);
    setStep(1);
  }, []);

  if (!isClient) return null; // Prevents hydration mismatch error

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-[35px]">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="border-b border-white">
          <tr>
            {["Full Name", "Email", "Phone Number", "Country", "Age", "Sex", "Interest"].map((header, index) => (
              <th key={index} scope="col" className="px-4 py-6">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {staticData.map((row, index) => (
            <tr key={index} className="border-b border-white">
              <th scope="row" className="px-8 py-6 font-medium text-white whitespace-nowrap">
                <Link href="/user-details" className="cursor-pointer">
                  {row.name}
                </Link>
              </th>
              <td className="px-4 py-4">{row.email}</td>
              <td className="px-4 py-4">{row.phone}</td>
              <td className="px-4 py-4">{row.country}</td>
              <td className="px-4 py-4">{row.age}</td>
              <td className="px-4 py-4">{row.gender}</td>
              {Interest ? (
                <td>
                  {row.interests.map((interest, i) => (
                    <span key={i} className="tag-interest">
                      {interest}
                    </span>
                  ))}
                </td>
              ) : (
                <td className="px-4 py-4">
                  <button className="font-medium text-blue-600 hover:underline" onClick={handlePopup}>
                    <Image width={45} height={45} src="/icons/Frame.png" alt="Frame" />
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {showPopup && step === 1 && (
        <Confirm title="Inform them" desc="Are you sure you want to delete this Trainer?" closePopup={handleClosePopup} onClick={() => setStep(2)} istrue />
      )}
      {step === 2 && <Confirm title="You removed a Trainer" closePopup={handleClosePopup} />}
    </div>
  );
};

export default Table;
