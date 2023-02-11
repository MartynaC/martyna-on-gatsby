import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script
  dangerouslySetInnerHTML={{
    __html: `

    var cv = document.createElement('canvas');
var ctx = cv.getContext('2d');
cv.width = 324;
cv.height = 168;
cv.classList.add("logo-canvas");
document.body.appendChild(cv);

var centerX = 60, centerY = 50;

var arrow = new Image();
arrow.src = '/tetha.svg';
arrow.classList.add("hidden-link");

function drawArrow(angle) {
  ctx.clearRect(0, 0, cv.width, cv.height);
  ctx.save();
  ctx.translate(centerX, centerY);
  ctx.rotate(-Math.PI / 2);
  ctx.rotate(angle);
  ctx.drawImage(arrow, -arrow.width / 2, -arrow.height / 2);
  ctx.restore();
}

document.onmousemove = function(e) {
  var dx = e.pageX - centerX;
  var dy = e.pageY - centerY;
  var theta = Math.atan2(dy, dx);
  drawArrow(theta);
};

var link = document.createElement("a");
link.href = "/";
link.appendChild(arrow);
document.body.appendChild(link);
    
`
  }}
/>
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
