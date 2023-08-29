/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState } from "react";
import TextArea from "../components/form-components/FormTextArea";

const AddNewTopic = () => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name,
      imageUrl,
      description,
    };

    try {
      const response = await fetch("http://localhost:4000/topics", {
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
      }
      setName("");
      setImageUrl("");
      setDescription("");
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div className="mx-auto max-w-12xl py-36 bg-gray-900">
      <form onSubmit={handleSubmit} className="mx-auto max-w-7xl px-8 pt-12">
        <div className="space-y-12">
          <div className="border-b border-white/10 pb-12">
            <h2 className="text-3xl font-semibold leading-7 text-white">
              Add New Topic Form
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {/* Topic name */}
              <div className="sm:col-span-3 sm:col-start-1">
                <label
                  htmlFor="topicname"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Topic Name <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="topicname"
                    name="name"
                    value={name}
                    required
                    autoComplete="first name"
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
              </div>

              {/* Topic URL */}
              <div className="sm:col-span-3 sm:col-start-1">
                <label
                  htmlFor="topicurl"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Topic URL <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    type="url"
                    id="topicurl"
                    name="imageUrl"
                    value={imageUrl}
                    required
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    onChange={(event) => setImageUrl(event.target.value)}
                  />
                </div>
              </div>

              {/* Topic Description */}
              <TextArea
                name={"description"}
                rows={4}
                textarea_name={"description"}
                placeholder={"Write your description here."}
                required
                value={description}
                htmlForId={"description"}
                labelDisplayText={"Topic Description"}
                labelSpanClassName={"text-red-500"}
                labelClassName={
                  "block text-sm font-medium leading-6 text-white"
                }
                textareaClassName={
                  "block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                }
                textareaDivWrapperClassName={"mt-2"}
                className={"sm:col-span-3 sm:col-start-1"}
                onChange={(event) => setDescription(event.target.value)}
              ></TextArea>
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

export default AddNewTopic;
