/* eslint-disable jsx-a11y/no-redundant-roles */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SpeakersListComponent from "../reusables/SpeakersListComponent";

const SelectedSpeakers = () => {
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        const response = await fetch("http://localhost:4000/speakers", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        if (response.status === 200) {
          const receivedData = await response.json();
          setSpeakers(receivedData.data.speakers);
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchSpeakers();
  }, []);

  return (
    <div className="bg-white py-16 rounded-t-md border border-gray-300 pb-8 mx-auto max-w-7xl">
      {/* Page Heading */}
      <div className="md:flex md:items-center md:justify-between px-8">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-indigo-800 sm:truncate sm:text-4xl sm:tracking-tight">
            SPEAKERS
          </h2>
        </div>
        <div className="mt-4 flex md:ml-4 md:mt-0">
          <Link
            to={"/speakers"}
            type="button"
            className="ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            View More Speakers
          </Link>
        </div>
      </div>
      <SpeakersListComponent speakers={speakers} />
    </div>
  );
};

export default SelectedSpeakers;
