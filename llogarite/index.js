var dom = document.getElementById("chart-container");
var myChart = echarts.init(dom, null, {
  renderer: "canvas",
  useDirtyRect: false,
});
var app = {};

var option;

option = {
  graphic: {
    elements: [
      {
        type: "text",
        left: "center",
        top: "center",
        style: {
          text: "Llogarite",
          fontSize: 130,
          fontWeight: "bold",
          lineDash: [0, 200],
          lineDashOffset: 0,
          fill: "transparent",
          stroke: "#000",
          lineWidth: 1,
        },
        keyframeAnimation: {
          duration: 5000,
          loop: true,
          keyframes: [
            {
              percent: 0.4,
              style: {
                fill: "transparent",
                lineDashOffset: 200,
                lineDash: [200, 0],
              },
            },
            {
              // Stop for a while.
              percent: 0.5,
              style: {
                fill: "transparent",
              },
            },
            {
              percent: 1,
              style: {
                fill: "#0d6efd",
              },
            },
          ],
        },
      },
    ],
  },
};

if (option && typeof option === "object") {
  myChart.setOption(option);
}

window.addEventListener("resize", myChart.resize);
