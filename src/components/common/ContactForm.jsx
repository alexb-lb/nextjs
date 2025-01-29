"use client";
import React, { useEffect, useState } from "react";
// @ts-ignore
import HoverBorderGradientDemo from "./HoverBorderGradientDemo";
import Image from "next/image";

const ContactForm = ({ sticky = true }) => {
  const [tabIndex, setTabIndex] = useState(1);

  // State to handle form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    solutionOfInterest: "",
    resume: null,
    coverLetter: null,
  });

  // State to handle validation errors
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setErrors({});
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      companyName: "",
      solutionOfInterest: "",
      resume: null,
      coverLetter: null,
    });
  }, [tabIndex]);

  // Function to handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle file input change
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  // Validate inputs
  const validate = () => {
    let tempErrors = {};

    if (!formData.firstName) tempErrors.firstName = "First name is required";
    if (!formData.lastName) tempErrors.lastName = "Last name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    if (!formData.phoneNumber)
      tempErrors.phoneNumber = "Phone number is required";
    if (tabIndex === 1 && !formData.companyName)
      tempErrors.companyName = "Company name is required";

    // Add more validations as needed

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      // Process form data
      console.log("Form submitted successfully:", formData);
    } else {
      console.log("Form has errors");
    }
  };

  return (
    <section
      className={`bg-primary_white flex overflow-hidden flex-col items-center self-center lg:px-20 px-[16px]  pt-[32px] pb-8 lg:mt-40 mt-[23px] lg:mb-40 w-full min-h-[640px] rounded-[32px] max-md:px-5 max-md:mt-10 max-md:max-w-full m-auto  bg-[url('https://cdn.builder.io/api/v1/image/assets/TEMP/9a5f60ed674cd2f8306581a1f4332a3e7caf3efbb4c97dd096d805c15890351b?placeholderIfAbsent=true&apiKey=faedc40a57794e3a93ca0ce63a18da4b')] bg-center bg-cover bg-no-repeat ${
        sticky && "sticky top-0 z-10"
      }`}
    >
      <div className="relative w-full">
        {tabIndex !== 4 && (
          <h2 className="self-center font-sora lg:text-5xl text-[32px] lg:leading-tight leading-[40.32px] lg:mb-12 mb-6 font-semibold text-center text-black capitalize max-md:text-[30px]">
            Get In Touch
          </h2>
        )}
        <div className="absolute -left-16 bottom-0 lg:block hidden">
          <Image
            loading="lazy"
            src="/images/common/contact_icon_left.svg"
            alt=""
            height={250}
            width={250}
          />
        </div>
        <div className="absolute -right-16 top-0 lg:block hidden">
          <Image
            loading="lazy"
            src="/images/common/contact_icon_right.svg"
            alt=""
            height={250}
            width={250}
          />
        </div>
        <div className="md:w-min w-full m-auto flex items-center max-md:justify-between overflow-hidden md:gap-4 gap-[13px] p-2 text-primary_black font-urbanist para3B border border-solid border-zinc-300 rounded-[60px] max-md:max-w-full">
          <button
            type="button"
            className={`md:gap-2.5 md:self-stretch md:py-4 py-2 max-md:px-[9.5px]  rounded-[60px] w-[130px] md:w-[200px]  max-md:text-[14px] max-md:leading-[16.8px] ${
              tabIndex === 1 && "bg-primary_green font-semibold"
            }`}
            onClick={() => setTabIndex(1)}
          >
            Request Demo
          </button>
          <button
            type="button"
            className={`md:gap-2.5 md:self-stretch md:py-4 py-2 max-md:px-[px] rounded-[60px] md:w-[200px] w-[140px] ${
              tabIndex === 2 && "bg-primary_green font-semibold"
            }`}
            onClick={() => setTabIndex(2)}
          >
            Become a Partner
          </button>
          <button
            type="button"
            className={`md:gap-2.5 md:self-stretch md:py-4 py-2  rounded-[60px] md:w-[200px] w-[80px] ${
              tabIndex === 3 && "bg-primary_green font-semibold"
            }`}
            onClick={() => setTabIndex(3)}
          >
            Careers
          </button>
        </div>
        <div className="flex flex-col items-center md:mt-8 max-md:max-w-full">
          {(tabIndex === 1 || tabIndex === 2) && (
            <>
              <form
                className="flex flex-col items-center mt-11 max-md:mt-10 max-md:max-w-full"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col items-center w-full max-w-[639px] text-zinc-500 max-md:max-w-full mb-8">
                  <div className="flex flex-wrap md:gap-10 items-center w-full text-lg leading-normal max-md:max-w-full">
                    <div className="flex flex-col gap-2 max-md:w-full">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        className="flex-1 shrink gap-2.5 self-stretch   pt-4 pb-3 my-auto border-b placeholder:text-[18px] placeholder:font-normal placeholder:font-urbanist border-zinc-300 min-h-[52px] min-w-[290px] outline-none bg-transparent"
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                      {errors.firstName && (
                        <span className="text-sm text-red-500">
                          {errors.firstName}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col gap-2 max-md:w-full">
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        className="flex-1 placeholder:text-[18px] placeholder:font-normal placeholder:font-urbanist shrink gap-2.5 self-stretch  pt-4 pb-3 my-auto border-b border-zinc-300 min-h-[52px] min-w-[290px] outline-none bg-transparent"
                        value={formData.lastName}
                        onChange={handleInputChange}
                      />
                      {errors.lastName && (
                        <span className="text-sm text-red-500">
                          {errors.lastName}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-wrap md:gap-10 md:mt-6 w-full max-md:max-w-full">
                    <div className="flex flex-col gap-2 max-md:w-full">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email ID"
                        className="flex-1 placeholder:text-[18px] placeholder:font-normal placeholder:font-urbanist shrink gap-2.5 self-stretch  pt-4 pb-3 h-full text-lg leading-normal border-b border-zinc-300 min-w-[290px] w-[84px] max-md:w-full outline-none bg-transparent"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                      {errors.email && (
                        <span className="text-sm text-red-500">
                          {errors.email}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col gap-2 max-md:w-full">
                      <input
                        type="number"
                        name="phoneNumber"
                        className="flex-1 placeholder:text-[18px] placeholder:font-normal placeholder:font-urbanist shrink gap-2.5 self-stretch  pt-4 pb-3 h-full text-lg leading-normal border-b border-zinc-300 min-w-[290px] w-[84px] max-md:w-full outline-none bg-transparent"
                        placeholder="+91 | Phone Number"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                      />
                      {errors.phoneNumber && (
                        <span className="text-sm text-red-500">
                          {errors.phoneNumber}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-wrap md:gap-10 items-center md:mt-6 w-full text-lg leading-normal max-md:max-w-full">
                    <div className="flex flex-col gap-2 max-md:w-full">
                      <input
                        type="text"
                        name="companyName"
                        placeholder="Company Name"
                        className="flex-1 placeholder:text-[18px] placeholder:font-normal placeholder:font-urbanist shrink gap-2.5 self-stretch  pt-4 pb-3 my-auto border-b border-zinc-300 min-h-[52px] min-w-[290px] outline-none bg-transparent"
                        value={formData.companyName}
                        onChange={handleInputChange}
                      />
                      {errors.companyName && (
                        <span className="text-sm text-red-500">
                          {errors.companyName}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-1 shrink gap-10 justify-between items-center self-stretch  pt-4 pb-3 my-auto border-b basis-0 border-zinc-300 min-h-[52px] min-w-[290px]">
                      <select
                        name="solutionOfInterest"
                        value={formData.solutionOfInterest}
                        onChange={handleInputChange}
                        className="outline-none bg-transparent text-[18px] font-normal text-[#9ca3af] font-urbanist  pr-[150px] md:pr-[100px]"
                      >
                        <option value="">Solution of Interest</option>
                        <option value="Gen AI">Gen AI</option>
                        <option value="Interaction AI">Interaction AI</option>
                        <option value="Support AI">Support AI</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-[34px] md:mt-[72px]">
                    <HoverBorderGradientDemo
                      content="Submit"
                      className="text-[20px] leading-[20px] capitalize font-urbanist w-[130px] md:w-[183px] h-[60px]  flex items-center justify-center text-white rounded-full border-solid"
                      onClick={handleSubmit}
                    />
                  </div>
                </div>
              </form>
            </>
          )}

          {tabIndex === 3 && (
            <form
              className="flex flex-col items-center mt-11 max-md:mt-10 max-md:max-w-full"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col items-center w-full max-w-[639px] mx-auto text-zinc-500 max-md:max-w-full mb-8">
                <div className="flex flex-wrap gap-10 items-center w-full text-lg leading-normal max-md:max-w-full">
                  <div className="flex flex-col gap-2 max-md:w-full">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      className="flex-1 placeholder:text-[18px] placeholder:font-normal placeholder:font-urbanist shrink gap-2.5 self-stretch  pt-4 pb-3 my-auto border-b border-zinc-300 min-h-[52px] min-w-[290px] outline-none bg-transparent"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                    {errors.firstName && (
                      <span className="text-sm text-red-500">
                        {errors.firstName}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-2 max-md:w-full">
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      className="flex-1 placeholder:text-[18px] placeholder:font-normal placeholder:font-urbanist shrink gap-2.5 self-stretch  pt-4 pb-3 my-auto border-b border-zinc-300 min-h-[52px] min-w-[290px] outline-none bg-transparent"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                    {errors.lastName && (
                      <span className="text-sm text-red-500">
                        {errors.lastName}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap gap-10 mt-6 w-full max-md:max-w-full">
                  <div className="flex flex-col gap-2 max-md:w-full">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email ID"
                      className="flex-1 placeholder:text-[18px] placeholder:font-normal placeholder:font-urbanist shrink gap-2.5 self-stretch  pt-4 pb-3 h-full text-lg leading-normal border-b border-zinc-300 min-w-[290px] w-[84px] max-md:w-full outline-none bg-transparent"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {errors.email && (
                      <span className="text-sm text-red-500">
                        {errors.email}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-2 max-md:w-full">
                    <input
                      type="number"
                      name="phoneNumber"
                      className="flex-1 placeholder:text-[18px] placeholder:font-normal placeholder:font-urbanist shrink gap-2.5 self-stretch  pt-4 pb-3 h-full text-lg leading-normal border-b border-zinc-300 min-w-[290px] w-[84px] max-md:w-full outline-none bg-transparent"
                      placeholder="+91 | Phone Number"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                    />
                    {errors.phoneNumber && (
                      <span className="text-sm text-red-500">
                        {errors.phoneNumber}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap gap-10 items-center max-md:justify-center mt-6 w-full text-lg leading-normal max-md:max-w-full">
                  <div>
                    {/* <input
                      type="file"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      className="flex-1 shrink gap-2.5 self-stretch  pt-4 pb-3 my-auto border-b border-zinc-300 min-h-[52px] min-w-[290px]"
                      onChange={handleFileChange}
                    /> */}
                    <label
                      htmlFor="resumeUpload"
                      className="flex overflow-hidden flex-col flex-1 shrink justify-center items-center self-stretch py-4 my-auto bg-white rounded-xl border border-green-900 border-dashed basis-0 min-w-[290px] max-md:px-5"
                    >
                      <div className="flex flex-col items-center">
                        <Image
                          loading="lazy"
                          src="/images/common/upload.svg"
                          alt=""
                          className="object-contain aspect-[0.93] w-[13px]"
                          height={14}
                          width={13}
                        />
                        <div className="mt-1 text-sm leading-none">
                          Upload your resume
                        </div>
                        <div className="mt-1 text-xs leading-relaxed">
                          (Max size 2Mb)
                        </div>
                      </div>
                    </label>
                    <input
                      type="file"
                      id="resumeUpload"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      className="sr-only flex-1 shrink gap-2.5 self-stretch  pt-4 pb-3 my-auto border-b border-zinc-300 min-h-[52px] min-w-[290px]"
                      onChange={handleFileChange}
                    />
                  </div>
                  <div>
                    {/* <input
                    type="file"
                    name="coverLetter"
                    accept=".pdf,.doc,.docx"
                    className="flex-1 shrink gap-2.5 self-stretch  pt-4 pb-3 my-auto border-b border-zinc-300 min-h-[52px] min-w-[290px]"
                    onChange={handleFileChange}
                  /> */}
                    <label
                      htmlFor="coverLetterUpload"
                      className="flex overflow-hidden flex-col flex-1 shrink justify-center items-center self-stretch py-4 my-auto bg-white rounded-xl border border-green-900 border-dashed basis-0 min-w-[290px] max-md:px-5"
                    >
                      <div className="flex flex-col items-center">
                        <Image
                          loading="lazy"
                          src="/images/common/upload.svg"
                          alt=""
                          // className="object-contain aspect-[0.86] w-[13px]"
                          height={14}
                          width={13}
                        />
                        <div className="mt-1 text-sm leading-none">
                          Upload your Coverletter
                        </div>
                        <div className="mt-1 text-xs leading-relaxed">
                          (Max size 2Mb)
                        </div>
                      </div>
                    </label>
                    <input
                      type="file"
                      id="coverLetterUpload"
                      name="coverLetter"
                      accept=".pdf,.doc,.docx"
                      className="sr-only flex-1 shrink gap-2.5 self-stretch  pt-4 pb-3 my-auto border-b border-zinc-300 min-h-[52px] min-w-[290px]"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
                <div className=" mt-12">
                  <HoverBorderGradientDemo
                    content="Submit"
                    className="text-[20px] leading-[20px] capitalize font-urbanist w-[183px] h-[60px]  flex items-center justify-center text-white rounded-full border-solid"
                    onClick={handleSubmit}
                  />
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
