/*eslint-disable*/
import React from "react";
import styles from "./logo.module.css";
//import anime from "animejs/lib/anime.es.js";
import orphHand from "./logo-greyscale.svg";
//import dev from "../../assets/img/devfolioD.png";
import "./header.css";
//import Banner from "../../components/banner/banner";
// reactstrap components
import { Container } from "reactstrap";
// core components

//import Particles from "react-tsparticles";

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  React.useEffect(() => {
    // document.addEventListener("DOMContentLoaded", function () {
    //   let devfolioOptions = {
    //     buttonSelector: "#devfolio-apply-now",
    //      key: "nmit-hacks"
    //   };

    //   let script = document.createElement("script");
    //   script.src = "https://apply.devfolio.co";
    //   document.head.append(script);

    //   script.onload = function () {
    //     new Devfolio(devfolioOptions);
    //   };

    //   script.onerror = function () {
    //     document
    //       .querySelector(devfolioOptions.buttonSelector)
    //       .addEventListener("click", function () {
    //         window.location.href =
    //           "https://devfolio.co/external-apply/" + devfolioOptions.key;
    //       });
    //   };
    // });



    var TWO_PI = Math.PI * 2;
    var HALF_PI = Math.PI / 2;
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var scale = window.devicePixelRatio || 0;
    var lines = [];
    var frame = 0;
    var width;
    var height;
    var gradient;

    function Line(x, y) {
      this.x = x;
      this.y = y;
      this.path = [];
      this.pathLength = 0;
      this.angle = 0;
      this.speed = random(1, 2);
      this.target = { x: x + 0.5, y: y + 0.5 };
      this.thickness = Math.round(random(1.5, 2));
      this.maxLength = Math.round(random(200, 350));
      this.hasShadow = this.thickness > 2;
      this.decay = random(0.0075, 0.05);
      this.alpha = 1;
    }

    Line.prototype.step = function () {

      if (this.pathLength >= this.maxLength) {
        this.alpha -= this.decay;
        return;
      }

      this.x += Math.cos(this.angle) * this.speed;
      this.y += Math.sin(this.angle) * this.speed;

      var isAnchor = false;
      var target = this.target;
      var dx = target.x - this.x;
      var dy = target.y - this.y;
      var distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.speed) {
        isAnchor = true;
        this.x = target.x;
        this.y = target.y;
        this.steer();
      }

      this.path.push({
        x: this.x,
        y: this.y,
        isAnchor: isAnchor
      });

      this.pathLength++;
    };

    Line.prototype.draw = function () {

      context.save();
      context.globalAlpha = this.alpha;
      context.lineWidth = this.thickness;

      context.beginPath();

      if (this.hasShadow) {
        context.shadowOffsetX = 10;
        context.shadowOffsetY = 20;
        context.shadowBlur = 12;
        context.shadowColor = 'rgba(0,0,0,0.09)';
      }

      this.path.forEach(function (point, i) {
        context[i === 0 ? 'moveTo' : 'lineTo'](point.x, point.y);
      });

      context.stroke();

      context.beginPath();
      context.arc(this.path[0].x, this.path[0].y, 4, 0, TWO_PI);
      context.fill();

      context.stroke();

      context.restore();
    };

    Line.prototype.steer = function () {

      var distance = random(50, 200);
      var angle = random([-HALF_PI, 0, HALF_PI, -Math.PI]);

      // squash all non-anchor points to squeeze out some extra performance
      this.path = this.path.filter(function (point) { return point.isAnchor === true; });

      this.target.x = this.x + Math.cos(angle) * distance;
      this.target.y = this.y + Math.sin(angle) * distance;
      this.angle = angle;
    };

    function random(min, max) {
      if (arguments.length == 0) return Math.random();
      if (Array.isArray(min)) return min[Math.floor(Math.random() * min.length)];
      if (typeof min == 'undefined') min = 1;
      if (typeof max == 'undefined') max = min || 1, min = 0;
      return min + Math.random() * (max - min);
    }

    function draw(time) {

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.lineCap = 'round';
      context.strokeStyle = gradient;
      context.fillStyle = '#F7FAFB';

      lines = lines.filter(function (line) {
        line.step();
        return line.alpha > 0.01;
      });

      lines.forEach(function (line) {
        line.draw();
      });

      if (frame % 19 === 0) {
        var x = width * 0.5 + random(-350, 350);
        var y = height * 0.5 + random(-310, 310);
        lines.push(new Line(x, y));
      }

      frame++;
      draw.raf = requestAnimationFrame(draw);
    }

    function resize(event) {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * scale;
      canvas.height = height * scale;
      context.scale(scale, scale);
      gradient = context.createLinearGradient(width * 0.25, 0, width * 0.75, 0);
      gradient.addColorStop(1, '#C2D832');
      gradient.addColorStop(0, '#71C5E8');
    }

    canvas.style.cssText = 'position:absolute;width:100%;height:100%;top:0;left:0;';
    document.documentElement.style.cssText = 'margin:0;padding:0;height:100%';
    document.getElementById('paint').style.cssText = 'height:100%;margin:0;padding:0;overflow:hidden;background-image:linear-gradient(-180deg,#F5F8FA 0%,#FFFFFF 100%)';
    document.getElementById('paint').appendChild(canvas);

    window.addEventListener('resize', resize);
    resize();
    requestAnimationFrame(draw);

    // const pathEls = document.querySelectorAll("path");
    // for (var i = 0; i < pathEls.length; i++) {
    //   const pathEl = pathEls[i];
    //   const offset = anime.setDashoffset(pathEl);
    //   pathEl.setAttribute("stroke-dashoffset", offset);
    //   anime({
    //     targets: pathEl,
    //     strokeDashoffset: [offset, 0],
    //     duration: anime.random(1000, 3000),
    //     delay: anime.random(0, 1000),
    //     loop: true,
    //     direction: "alternate",
    //     easing: "linear",
    //     autoplay: true
    //   });
    // }

    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  // const particlesInit = (main) => {
  //   console.log(main);

  // };

  // const particlesLoaded = (container) => {
  //   console.log(container);
  // };



  return (
    <>
      <div className="page-header clear-filter back" filter-color="red" id="paint" >
        <div
          className={styles.back}
          ref={pageHeader}

        >


        </div>
        <Container className="" style={{ textAlign: "center" }}>
          <div className="text-center">
            <img
              className={styles.Logo}
              alt="Logo Here"
              src={orphHand}
            ></img>
            <h3
              className=""
              style={{ color: "white", marginTop: "1%", fontSize: "1rem", backgroundColor: '#1C2C30' }}
            >
              Hackathon by The Dept. of CSE,NMIT 
            </h3>
            
            <div
              className="apply-button"
              data-hackathon-slug="nmit-hacks"
              data-button-theme="dark-inverted"
              style={{height: '44px', width: '308px'}}
            ></div>
          </div>
          <h3
            className={styles.text}
            style={{ color: "white", marginBottom: "20px",marginTop:'20px' }}
          >
            <i
              className="fas fa-calendar-alt"
              style={{ marginRight: "1%" }}
            ></i>

            <a
              target="_blank"
              style={{ color: "white", textDecoration: "none", backgroundColor: '#1C2C30',marginLeft:'-10px' }}
              href="#pablo"
            >
              29th-30th April 2022
            </a>
          </h3>
          <h3
            className={styles.text}
            style={{ color: "white", marginBottom: "30px" }}
          >
            <i class="fas fa-map-marker-alt" style={{ marginRight: "1%" }}></i>{" "}
            <a
              href="https://goo.gl/maps/8wwXNWAup9Mw3puDA"
              style={{ color: "white", textDecoration: "none", backgroundColor: '#1C2C30' }}
            >
              Nitte Meenakshi Institute of Technology, Bangalore
            </a>
          </h3>

        </Container>
      </div>
    </>
  );
}

export default IndexHeader;