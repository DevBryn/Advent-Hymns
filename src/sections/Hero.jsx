import React from "react";
import Image from "next/image";
import logo from "@/assets/sda-logo.png";
import SearchBox from "@/components/SearchBox";
import Card from "@/components/Card";
import { MdQueueMusic } from "react-icons/md";
import { MdOutlinePlayCircle } from "react-icons/md";
import { MdInfoOutline } from "react-icons/md";

export default function Hero() {
  return (
    <section className="py-8">
      <div className="container sm:max-w-[700px] sm:m-auto">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col">
            <div className="flex justify-center items-center">
              <Image alt="sda-logo" src={logo} width={230} priority={true} />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-center text-2xl text-transparent bg-clip-text bg-gradient-to-r from-white to-accent-yellow/60">
                Advent Hymns
              </h1>
              <p className="text-center font-light text-sm sm:max-w-[400px] sm:m-auto">
                A comprehensive app dedicated to providing easy access to the
                cherished hymnals of the Seventh-day Adventist community.
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-center sm:text-left font-medium mb-2">
              Quick Search
            </p>
            <SearchBox />
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mt-2">
            <Card
              children={
                <>
                  <div className="flex flex-col gap-2">
                    <div>
                      <MdQueueMusic className="size-8 text-accent-yellow" />
                    </div>
                    <div>
                      <h1 className="font-medium sm:text-sm">SDA Hymn List</h1>
                    </div>
                    <div>
                      <p className="text-sm sm:text-xs font-light">
                        With over{" "}
                        <span className="font-medium text-accent-yellow">
                          500
                        </span>{" "}
                        SDA hymnal <br /> songs to play.
                      </p>
                    </div>
                  </div>
                </>
              }
              link={"songs"}
            />
            <Card
              children={
                <>
                  <div className="flex flex-col gap-2">
                    <div>
                      <MdOutlinePlayCircle className="size-8 text-accent-yellow" />
                    </div>
                    <div>
                      <h1 className="font-medium sm:text-sm">
                        SDA Hymn Player
                      </h1>
                    </div>
                    <div>
                      <p className="text-sm sm:text-xs font-light">
                        Play any SDA Hymnal with <br />{" "}
                        <span className="font-medium text-accent-yellow">
                          lyrics
                        </span>
                        .
                      </p>
                    </div>
                  </div>
                </>
              }
              link={"player"}
            />
            <Card
              children={
                <>
                  <div className="flex flex-col gap-2">
                    <div>
                      <MdInfoOutline className="size-8 text-accent-yellow" />
                    </div>
                    <div>
                      <h1 className="font-medium sm:text-sm">
                        About Advent Hymns
                      </h1>
                    </div>
                    <div>
                      <p className="text-sm sm:text-xs font-light">
                        Learn more about <br />{" "}
                        <span className="font-medium text-accent-yellow">
                          Advent Hymns
                        </span>{" "}
                        app.
                      </p>
                    </div>
                  </div>
                </>
              }
              link={"about"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
