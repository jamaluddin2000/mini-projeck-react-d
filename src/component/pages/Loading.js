import * as React from "react"

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{
      margin: "auto",
      background: "#fff",
      display: "block",
      shapeRendering: "auto",
    }}
    width={504}
    height={504}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <circle cx={50} cy={23} r={13} fill="#e15b64">
      <animate
        attributeName="cy"
        dur="1s"
        repeatCount="indefinite"
        calcMode="spline"
        keySplines="0.45 0 0.9 0.55;0 0.45 0.55 0.9"
        keyTimes="0;0.5;1"
        values="23;77;23"
      />
    </circle>
  </svg>
)

export default SvgComponent
