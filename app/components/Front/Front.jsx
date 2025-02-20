"use client";
import React, { useState, useEffect } from "react";
import "./front.css";
import { useRouter } from "next/navigation";
import Button from "@/app/helpers/Button";
import Link from "next/link";
import Image from "next/image";
const Front = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className='wrapper'>
      {isLoading ? (
        <div className='splash_screen'>
          <div className='front_img'>
            <Image width={100} height={100} src='/images/logo.png' alt='Logo' />
          </div>
        </div>
      ) : (
        <div className='front_content'>
          <div className='front_img'>
            <Image
              width={100}
              height={100}
              src='/images/logo.png'
              alt='Logo'
              className={isLoading ? "loading" : "loaded"}
            />
          </div>
          <h1>Welcome to Find Admin Portal</h1>
          <Link href={"/account"}>
            <Button name='Get Started' />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Front;
