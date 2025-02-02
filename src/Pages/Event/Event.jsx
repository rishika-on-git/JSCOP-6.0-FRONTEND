import React from "react";
import { useNavigate, Link } from "react-router-dom"; // Import useNavigate and Link
import "./Events.css";
import "./Events.scss";
import Detail from "../../assets/Data/EventsData";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Event = () => {
  const navigate = useNavigate();

  return (
    <div id="events">
      <div className="eventheading">EVENTS</div>
      <div className="event-container">
        {Detail.map((item, index) => (
          (item.title === "CODE WARS" || item.title === "ELECTRIFY DASH") ? (
            <div key={index} className="event-box">
              <div className="event-cardss">
                <div className="nft">
                  <div className="mainn">
                    <div style={{ justifyContent: "center", display: "flex" }}>
                      <img className="tokenImage" src={item.imgsrc} style={{ height: "300px", width: "400px" }} alt="NFT" />
                    </div>
                    <h2 className="EventNameHEAD">{item.title}</h2>
                    <div className="tokenInfo">
                      <div className="duration">
                        <Link
                          to={`/eventDetails/${item.id}`}
                          className="event-btn"
                        >
                          Read more
                        </Link>
                      </div>
                    </div>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          ) : <SkeletonTheme
            key={index}
            color="#e0e0e0"
            baseColor="#cdcbcb"
            highlightColor="#f5f5f5"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ padding: "0px 35px" }}>
                <Skeleton width={226} height={200} />
              </div>
              <br />
              <Skeleton width={180} height={25} />
              <br />

              <Skeleton width={100} height={28} />
              <div style={{ color: "white" }}>
                <br />
                <h3>To Be Revealed Soon...</h3>
              </div>
            </div>
            <br />
            <br />
          </SkeletonTheme>
        ))}
      </div>
    </div>
  );
};

export default Event;




