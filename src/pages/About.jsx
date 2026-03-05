import React from "react";
import { useSelector } from "react-redux";
import WorldMap from "../components/worldMap";
import "./about.css";
import {
  FaFunnelDollar,
  FaUniversity,
  FaBuilding,
  FaUtensils,
  FaTruck,
  FaDatabase,
  FaMicrosoft,
  FaHardHat,
  FaHeartbeat,
  FaStore
} from "react-icons/fa";

function About() {
const content = useSelector((state) => state.textContentSlice?.[0]);

const aboutPage = content?.pages?.find(
  (page) => page.id === "page2"
);

const hero = aboutPage?.sections?.[0];
const whoWeAre = aboutPage?.sections?.[1];
const serving = aboutPage?.sections?.[2];
const core = aboutPage?.sections?.[3];
const sectors = aboutPage?.sections?.[4];

if (!hero) return <h2 className="text-center mt-5">Loading...</h2>;

  return (
    <div>

      {/* Hero Section */}
      <section
        className="hero-section d-flex align-items-center justify-content-center text-white text-center"
        style={{
          background: `url(${hero.imageLink}) center/cover no-repeat`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="position-relative">
          <h1 className="display-4 fw-bold">{hero.title}</h1>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="who-section">
        <div className="container">
          <div className="row align-items-center gx-5 gy-5">
            <div className="col-md-6 position-relative">
              <div className="red-bg"></div>

              <img
                src={whoWeAre.imageLink1}
                alt=""
                className="img-fluid rounded shadow position-relative main-img"
              />

              <img
                src={whoWeAre.imageLink2}
                alt=""
                className="small-img rounded shadow"
              />
            </div>

            <div className="col-md-6">
              <h6 className="text-uppercase text-muted mb-2">
                {whoWeAre.title1}
              </h6>

              <h2 className="fw-bold lh-sm mb-3 fs-1">
                {whoWeAre.title2}
              </h2>

              <p className="custom-subheading mb-4 fs-6">
                {whoWeAre.subheading}
              </p>

              <button className="btn btn-danger px-4 py-2">
                {whoWeAre.button}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* map section */}
      <section className="serving-section py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">{serving?.title1}</h2>
          <WorldMap />
        </div>
      </section>

      {/* core section */}
      <section className="core-section py-5">
        <div className="container">

          {/* Section Heading */}
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3">
              {core.title1}
            </h2>

            <p className="text-muted mb-0">
              {core.subheading1}
            </p>
          </div>


          <div className="row align-items-center">

            {/* */}
            <div className="col-12 col-md-4 mb-4 mb-md-0 text-start">
              <h6 className="text-muted">
                {core.title2}
              </h6>
              <h1 className=" text-danger">
                {core.title3}
              </h1>
            </div>

            <div className="col-12 col-md-8">
            <div className="row g-4">

                <div className="col-12 col-md-6">

                  <div className="card border-0 red-shadow p-4 mb-4 mt-md-n3">
                    <img
                      src={core.imageLink1}
                      alt=""
                      width="80"
                      className="mb-3"
                    />
                    <p className="text-danger mb-0 fs-4">
                      {core.subheading2}
                    </p>
                  </div>

                  <div className="card border-0 red-shadow p-4">
                    <img
                      src={core.imageLink3}
                      alt=""
                      width="80"
                      className="mb-3"
                    />
                    <p className="text-danger mb-0 fs-4">
                      {core.subheading4}
                    </p>
                  </div>

                </div>


                <div className="col-12 col-md-6 mt-md-5">

                  <div className="card border-0 red-shadow p-4 mb-4">
                    <img
                      src={core.imageLink2}
                      alt=""
                      width="80"
                      className="mb-3"
                    />
                    <p className="text-danger mb-0 fs-4">
                      {core.subheading3}
                    </p>
                  </div>

                  <div className="card border-0 red-shadow p-4">
                    <img
                      src={core.imageLink4}
                      alt=""
                      width="80"
                      className="mb-3"
                    />
                    <p className="text-danger mb-0 fs-4">
                      {core.subheading5}
                    </p>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* sectors served section */}
      <section className="sectors-section py-5 mb-5">
        <div className="container">

          <h2 className="fs-2 text-center mb-4">
            {sectors.title1}
          </h2>

          <div className="row">

            <div className="col-12 col-md-6 mb-4 mb-md-0">

              <div className="d-flex align-items-center justify-content-start justify-content-md-end mb-4">

                <FaFunnelDollar className="text-danger me-3 me-md-0 ms-md-3 fs-4 order-1 order-md-2" />

                <span className="fw-semibold fs-5 order-2 order-md-1">
                  {sectors.title2}
                </span>

              </div>

              <div className="d-flex align-items-center justify-content-start justify-content-md-end mb-4">
                <FaUniversity className="text-danger me-3 me-md-0 ms-md-3 fs-4 order-1 order-md-2" />
                <span className="fw-semibold fs-5 order-2 order-md-1">
                  {sectors.title3}
                </span>
              </div>

              <div className="d-flex align-items-center justify-content-start justify-content-md-end mb-4">
                <FaBuilding className="text-danger me-3 me-md-0 ms-md-3 fs-4 order-1 order-md-2" />
                <span className="fw-semibold fs-5 order-2 order-md-1">
                  {sectors.title4}
                </span>
              </div>

              <div className="d-flex align-items-center justify-content-start justify-content-md-end mb-4">
                <FaUtensils className="text-danger me-3 me-md-0 ms-md-3 fs-4 order-1 order-md-2" />
                <span className="fw-semibold fs-5 order-2 order-md-1">
                  {sectors.title5}
                </span>
              </div>

              <div className="d-flex align-items-center justify-content-start justify-content-md-end">
                <FaTruck className="text-danger me-3 me-md-0 ms-md-3 fs-4 order-1 order-md-2" />
                <span className="fw-semibold fs-5 order-2 order-md-1">
                  {sectors.title6}
                </span>
              </div>

            </div>


            {/* RIGHT COLUMN */}
            <div className="col-12 col-md-6">

              <div className="d-flex align-items-center mb-4">
                <FaDatabase className="text-danger me-3 fs-4" />
                <span className="fw-semibold fs-5">
                  {sectors.title7}
                </span>
              </div>

              <div className="d-flex align-items-center mb-4">
                <FaMicrosoft className="text-danger me-3 fs-4" />
                <span className="fw-semibold fs-5">
                  {sectors.title8}
                </span>
              </div>

              <div className="d-flex align-items-center mb-4">
                <FaHardHat className="text-danger me-3 fs-4" />
                <span className="fw-semibold fs-5">
                  {sectors.title9}
                </span>
              </div>

              <div className="d-flex align-items-center mb-4">
                <FaHeartbeat className="text-danger me-3 fs-4" />
                <span className="fw-semibold fs-5">
                  {sectors.title10}
                </span>
              </div>

              <div className="d-flex align-items-center">
                <FaStore className="text-danger me-3 fs-4" />
                <span className="fw-semibold fs-5">
                  {sectors.title11}
                </span>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
