import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import "./Footer.css";
import { DetailsFooter } from "../Navbar/HomeDetails/DetailsFooter";
import TV from "../Images/TV App Logo.png";

export const Footer = () => {
  return (
    <>
      <Box>
        <div id="devices-info_container">
          <div className="devices-info">
            <div className="tv-logo">
              <img src={require("../Images/TV App Logo.png")} alt="" />
            </div>
            <p className="devices-heading">Watch Apple TV+ here or anywhere.</p>
            <p className="devices-subheading">
              Find Apple TV+ on the Apple TV app, available on Apple Devices,
              smart TVs, and more.
            </p>
            <p className="support-link">
              <a href="https://support.apple.com/en-in/guide/tvplus/welcome/web">
                See all supported devices&nbsp
              </a>
            </p>
            <div className="devices">
              <div className="device">
                <img src={require("../Images/product_landing 1.png")} />
                <p className="dev-cat">Apple TV</p>
              </div>
              <div className="device">
                <img src={require("../Images/product_landing 2.png")} />
                <p className="dev-cat">iPhone</p>
              </div>
              <div className="device">
                <img src={require("../Images/product_landing 3.png")} />
                <p className="dev-cat">iPad</p>
              </div>
              <div className="device">
                <img src={require("../Images/product_landing 4.png")} />
                <p className="dev-cat">Mac</p>
              </div>
              <div className="device">
                <img src={require("../Images/product_landing 5.png")} />
                <p className="dev-cat">Airplay</p>
              </div>
            </div>
            <p className="dev-info">See on your big screen.</p>
            <p className="dev-setup">
              <a href="https://support.apple.com/en-in/guide/tvplus/welcome/web">
                Set up your device&nbsp
              </a>
            </p>
            <p className="dev-compt">
              <a href="https://www.apple.com/apple-tv-app/devices/">
                Explore compatible devices&nbsp
              </a>
            </p>
            <div className="compt-devices">
              <div className="compt-device">
                <img src="../Images/banner 1.png" alt="" />
                <p className="dev-cat">Streaming Devices</p>
                <ul className="dev-list">
                  <li>Roku</li>
                  <li>Fire TV</li>
                  <li>Google TV</li>
                  <li>Android TV</li>
                </ul>
              </div>
              <div className="compt-device">
                <img src="../Images/banner 2.png" alt="" />
                <p className="dev-cat">Smart TVs</p>
                <ul className="dev-list">
                  <li>Samsung</li>
                  <li>LG</li>
                  <li>VIZIO</li>
                  <li>Sony</li>
                </ul>
              </div>
              <div className="compt-device">
                <img src="../Images/banner 3.png" alt="" />
                <p className="dev-cat">Gaming Consoles</p>
                <ul className="dev-list">
                  <li>PlayStation</li>
                  <li>Xbox</li>
                </ul>
              </div>
            </div>
            <p className="avail">
              Device availability varies by country or region.
            </p>
          </div>
        </div>
      </Box>
    </>
  );
};
