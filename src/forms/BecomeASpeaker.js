/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState } from "react";
// import { PhotoIcon } from "@heroicons/react/24/solid";
import {
  types,
  countries,
  country_abbr_3,
} from "../data/speakers-form-data.js";
import TextArea from "../components/form-components/FormTextArea";

const initialUser = {
  imageUrl: "",
  biography: "",
  firstname: "",
  role: "",
  mobile_country_code: "NGN",
  mobile_phone: "",
  country_of_residence: "Nigeria",
};

const BecomeASpeaker = () => {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [user, setUser] = useState({
    mobile_country_code: "NGN",
    country_of_residence: "Nigeria",
  });

  const topic_names = types.map((type) => {
    return [type.name].join("");
  });

  const handleCheckboxChange = (topic_name) => {
    const updatedTopic = [...selectedTypes];
    const topic_type_index = updatedTopic.indexOf(topic_name);
    if (topic_type_index === -1) {
      updatedTopic.push(topic_name);
    } else {
      updatedTopic.splice(topic_type_index, 1);
    }
    setSelectedTypes(updatedTopic);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (selectedTypes.length === 0) {
      alert("Please, select at least one speaker topic.");
      return;
    }

    const formData = user;
    formData.speaker_types = selectedTypes;
    console.log(formData);

    try {
      const response = await fetch("http://localhost:4000/speakers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      if (response.status === 201) {
        await response.json();
        console.log("record added successfully");
      }
    } catch (err) {
      console.error("Error:", err);
    }

    setSelectedTypes([]);
    setUser(initialUser);
  };

  return (
    <div className="mx-auto max-w-12xl py-36 bg-gray-900">
      <form onSubmit={handleSubmit} className="mx-auto max-w-7xl px-8 pt-12">
        <div className="space-y-12">
          <div className="border-b border-white/10 pb-12">
            <h2 className="text-3xl font-semibold leading-7 text-white">
              New Speaker Details
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {/* Image URL */}
              <div className="sm:col-span-3 sm:col-start-1">
                <label
                  htmlFor="topicurl"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Add Speaker's Image <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    type="url"
                    id="topicurl"
                    name="imageUrl"
                    value={user.imageUrl}
                    // required
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Biography */}
              <TextArea
                name="biography"
                value={user.biography}
                rows={4}
                textarea_name={"biography"}
                placeholder={"Write your biography here."}
                // required
                htmlForId={"biography"}
                labelDisplayText={"Biography"}
                labelSpanClassName={"text-red-500"}
                labelClassName={
                  "block text-sm font-medium leading-6 text-white"
                }
                textareaClassName={
                  "block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                }
                textareaDivWrapperClassName={"mt-2"}
                className={"sm:col-span-3 sm:col-start-1"}
                onChange={handleChange}
              ></TextArea>

              {/* First name */}
              <div className="sm:col-span-3 sm:col-start-1">
                <label
                  htmlFor="firstname"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  First name <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    value={user.firstname}
                    // required
                    autoComplete="first name"
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Role */}
              <div className="sm:col-span-3 sm:col-start-1">
                <label
                  htmlFor="role"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Profession <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="role"
                    name="role"
                    value={user.role}
                    // required
                    autoComplete="profession"
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Telephone (Mobile) */}
              <div className="sm:col-span-3 sm:col-start-1">
                <label
                  htmlFor="mobile_phone"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Telephone (Mobile) <span className="text-red-500">*</span>
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <label htmlFor="mobile_country_code" className="sr-only">
                      Mobile Phone Number
                    </label>
                    <select
                      id="mobile_country_code"
                      name="mobile_country_code"
                      value={user.mobile_country_code}
                      // required
                      className="h-full rounded-md border-0 bg-transparent py-0 pl-3 pr-7 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                      onChange={handleChange}
                    >
                      {country_abbr_3.map((country, index) => (
                        <option key={index}>{country}</option>
                      ))}
                    </select>
                  </div>
                  <input
                    type="tel"
                    id="mobile_phone"
                    value={user.mobile_phone}
                    name="mobile_phone"
                    // required
                    spellCheck="false"
                    className="bg-white/5 block w-full rounded-md border-0 py-1.5 pl-16 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Country of Residence */}
              <div className="sm:col-span-3 sm:col-start-1">
                <label
                  htmlFor="country_of_residence"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Country of Residence <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <select
                    id="country_of_residence"
                    name="country_of_residence"
                    value={user.country_of_residence}
                    // required
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 [&_*]:text-black"
                    onChange={handleChange}
                  >
                    {countries.map((country, index) => (
                      <option key={index}>{country}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Speaker Types */}
          <div className="border-b border-white/10 pb-12">
            <label className="block text-sm font-medium leading-6 text-white">
              Speaker Types <span className="text-red-500">*</span>
            </label>
            <div className="mt-6 space-y-2 grid grid-cols-2 gap-x-6 items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {topic_names.map((topic_name) => (
                <div key={topic_name}>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        type="checkbox"
                        id={topic_name}
                        name={topic_name}
                        checked={selectedTypes.includes(topic_name)}
                        className="h-4 w-4 rounded border-white/10 bg-white/5 text-indigo-600 focus:ring-indigo-600 focus:ring-offset-gray-900"
                        onChange={() => handleCheckboxChange(topic_name)}
                      />
                    </div>

                    <div className="text-sm leading-6">
                      <label
                        htmlFor={topic_name}
                        className="font-medium text-white"
                      >
                        {topic_name}
                      </label>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-start gap-x-4">
          <button
            type="submit"
            className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 w-32"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default BecomeASpeaker;
