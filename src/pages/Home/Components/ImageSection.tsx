import React,{useState,useEffect} from 'react'
import {Transition} from '@headlessui/react'
import Data from "../ImageData";
//import ImageS from "../../../lib/Images/SriSriRaviShankar_Profile.jpg";
// import ImageS from "../../../lib/Images/SriSriRaviShankar_Profile.jpg"
import ImageS from '../../../lib/Images/SriSriRaviShankar_Profile.jpg'

export default function ImageSection(){
	  const [index, setIndex] = useState(0);
  const [header, setHeader] = useState("Me is You");
  const [content, setContent] = useState(
    "You are Me as You breath I also breath, I eat you Eat , I care You care."
  );
  const [Img, setImage] = useState(ImageS);
  const [visi, setVisi] = useState(true);
  function ChangeIndex(): void {
    if (index === Data.length - 1) {
      setIndex(0);
    } else {
      // alert(index)
      setIndex(index + 1);
    }
  }
  useEffect(() => {
    setTimeout(function () {
      setVisi(false);
    }, 1000);
    setTimeout(function (): void {
      const Datas: any = Data[index];
      setVisi(true);
      setImage(Datas.url);
      setContent(Datas.content);
      setHeader(Datas.header);
    }, 2000);
  }, [index]);

  useEffect(() => {
    setTimeout(function () {
      ChangeIndex();
    }, 7000);
  });
	return(
      <section className="h-[100vh] w-full flex items-center justify-center">
        <article className="absolute flex items-center justify-center h-[calc(100%-96px)] w-[calc(100%-10px)] top-[96px]">
          <div className="h-[97%] flex items-center justify-center md:w-[calc(90%)]  mt-2 md:mt-1 ">
            <Transition
              as={React.Fragment}
              show={visi}
              enter="transition-scale transform duration-500 ease-in-out"
              enterFrom="opacity-0 scale-50"
              enterTo="opacity-100 scale-100"
              leave="transition-scale transform duration-1000 ease-in-out"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-50"
            >
              <img
                className={`h-full w-auto sm:w-full rounded-lg object-cover md:object-none"`}
                src={Img}
                alt=""
              />
            </Transition>
            <Transition
              as={React.Fragment}
              show={visi}
              enter="transition-opacity transform duration-500 ease-in-out"
              enterFrom="opacity-0 "
              enterTo="opacity-100 "
              leave="transition-opacity transform duration-500 ease-in-out"
              leaveFrom="opacity-100 "
              leaveTo="opacity-0"
            >
              <div className="absolute bottom-10 bg-white dark:bg-green-500 p-4 dark:bg-opacity-20 z-10 bg-opacity-20 w-[300px] lg:w-[675px] backdrop-filter backdrop-blur rounded-lg">
                <h1
                  className="ml-0.5 sm:ml-2 text-blueGray-900 dark:text-green-700 text-xl lg:text-4xl font-semibold "
                  style={{ textShadow: "0.5px 0.5px 1px #00FFAA" }}
                >
                  <big className="font-comma absolute left-2.5 top-2.5">"</big>
                  {header}
                </h1>
                <blockquote
                  className="mt-2 text-base text-coolGray-900 dark:text-green-100 lg:text-xl"
                  style={{ textShadow: "0.5px 0.5px 2px #000" }}
                >
                  {content}
                </blockquote>
              </div>
            </Transition>
          </div>
        </article>
      </section>
		)
}