$(document).ready(function () {
  $("li.open").prev("li").addClass("before-open");
  $("li.open").next("li").addClass("after-open");
  $(".sideMenuTitle").click(function () {
    $(".sideBarDiv").toggleClass("collapsed-sidebar");
    if ($(".sideBarDiv").hasClass("collapsed-sidebar")) {
      $('[data-bs-toggle="tooltip"]').tooltip();
    } else {
      $('[data-bs-toggle="tooltip"]').tooltip("dispose");
    }
  });
  $(".datepicker").datepicker({
    dateFormat: "MM yy",
  });
  $("#nh-cat-input-add-wrap").on("click", function () {
    $("#add-btn-modal").modal("show");
  });
  $("#ac-modal-closebtn").on("click", function () {
    $("#add-btn-modal").modal("hide");
  });
  $("#bottom-close-btn").on("click", function () {
    $("#add-btn-modal").modal("hide");
  });



  const data = {
    labels: ['$1,000.00', '$38.00'],
    datasets: [{
      data: [70, 30,],
      backgroundColor: [
        '#1912D3', //blue 70%
        '#FF7664' //red 30%
      ],
      
      cutout: '20%',
      borderWidth: 0,
    }]
  };

  //doughnutLabelsLine Plugin
  const doughnutLabelsLine = {
    id: 'doughnutLabelsLine',
    afterDraw(chart, args, options) {
      if (chart.tooltip._active && chart.tooltip._active.length) {
        const activePoint = chart.tooltip._active[0];
        const { ctx, chartArea: { top, bottom, left, right, width, height } } = chart;
        const { x, y } = chart.getDatasetMeta(activePoint.datasetIndex).data[activePoint.index].tooltipPosition();
  
        // Draw lines and text only when hovering
        const halfheight = height / 2;
        const halfwidth = width / 2;
        const xLine = x >= halfwidth ? x + 25 : x - 25;
        const yLine = y >= halfheight ? y + 25 : y - 25;
        const extraLine = x >= halfwidth ? 10 : -10;
  
        // Line
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(xLine, yLine);
        ctx.lineTo(xLine + extraLine, yLine);
        ctx.strokeStyle = 'black';
        ctx.stroke();
  
        // Text
        const textWidth = ctx.measureText(chart.data.labels[activePoint.index]).width;
        ctx.font = '12px Work Sans';
        const textXPosition = x >= halfwidth ? 'left' : 'right';
        ctx.textAlign = textXPosition;
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#172F78';
        ctx.fillText(chart.data.labels[activePoint.index], xLine + extraLine, yLine);
      }
    }
  };
  

  const config = {
    type: 'doughnut',
    data,
    options: {
      layout: {
        padding: 0
      },
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          enabled: false 
      },
      }
    },
    plugins:[
      doughnutLabelsLine
    ]
  };

  const myChart = new Chart(
    $('#dashPieChart'),
    config
  );
});