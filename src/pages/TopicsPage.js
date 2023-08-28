/* eslint-disable jsx-a11y/no-redundant-roles */
import { Link } from "react-router-dom";

const topics = [
  {
    name: "Leadership Speakers",
    description:
      "We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "Mental Health & Wellbeing Speakers",
    description:
      "We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "Security, Risk & Mnagement Speakers",
    description:
      "We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "1Mental Health & Wellbeing Speakers",
    description:
      "We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients",
    imageUrl:
      "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "2Mental Health & Wellbeing Speakers",
    description:
      "We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "3Mental Health & Wellbeing Speakers",
    description:
      "We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients",
    imageUrl:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "4Mental Health & Wellbeing Speakers",
    description:
      "We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "5Mental Health & Wellbeing Speakers",
    description:
      "We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients",
    imageUrl:
      "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "6Mental Health & Wellbeing Speakers",
    description:
      "We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "7Mental Health & Wellbeing Speakers",
    description:
      "We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "8Mental Health & Wellbeing Speakers",
    description:
      "We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "9Mental Health & Wellbeing Speakers",
    description:
      "We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients",
    imageUrl:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "0Mental Health & Wellbeing Speakers",
    description:
      "We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients",
    imageUrl:
      "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "11Mental Health & Wellbeing Speakers",
    description:
      "We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "12Mental Health & Wellbeing Speakers",
    description:
      "We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
];

const TopicsPage = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 rounded-md mt-8 -mb-20">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="mt-8 text-3xl font-bold tracking-tight text-indigo-800 sm:text-4xl">
            SPEAKING TOPICS
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto my-10 grid max-w-2xl grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-4"
        >
          {topics.map((topic) => (
            <li key={topic.name}>
              <Link to={"#"}>
                <img
                  className="mx-auto rounded-md h-36 w-full object-cover"
                  src={topic.imageUrl}
                  alt=""
                />
                <h3 className="mt-2 mb-2 text-base font-semibold leading-5 tracking-tight text-gray-900">
                  {topic.name}
                </h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopicsPage;
