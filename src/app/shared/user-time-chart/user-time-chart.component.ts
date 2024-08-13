import { Component, OnInit, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { MatTableDataSource } from '@angular/material/table';
import { DashboardService } from 'src/app/core/services/dashboard.service';
@Component({
  selector: 'awwaltech-time-chart',
  templateUrl: './user-time-chart.component.html',
  styleUrls: ['./user-time-chart.component.css']
})
export class UserTimeChartComponent implements OnInit {

  private root!: am5.Root;
  userInfo: any;
  // dataSource: MatTableDataSource<unknown>;
  resultsLength: any;
  dataSource: any;
  chartData: any;
  constructor(@Inject(PLATFORM_ID)
  private platformId: Object,
    private zone: NgZone,
    private dash: DashboardService
  ) { }

  ngOnInit(): void {
    let dd: any = sessionStorage.getItem('user');
    this.userInfo = JSON.parse(dd);
    this.getMytimeByYear();
  }



  // Run the function only in the browser
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }
  getMytimeByYear() {
    this.dash.getTimeSheetByYear(this.userInfo.currentUser._id).subscribe({
      next: response => {
        this.chartData = response.data.records;
        this.getChart();
      },
      error: error => {
        if (error) {
          console.log(error)
        }
      },
      complete: () => {
        // console.log('Request complete');
      }
    });
  }
  getChart() {
    /* Chart code */
    this.browserOnly(() => {
      // Create root element
      // https://www.amcharts.com/docs/v5/getting-started/#Root_element
      let root = am5.Root.new("chartdiv");

      // Set themes
      // https://www.amcharts.com/docs/v5/concepts/themes/
      root.setThemes([am5themes_Animated.new(root)]);

      // Create chart
      // https://www.amcharts.com/docs/v5/charts/xy-chart/
      let chart = root.container.children.push(am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true
      }));

      // Add cursor
      // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
      let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
      cursor.lineY.set("visible", false);


      // Create axes
      // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
      let xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
      xRenderer.labels.template.setAll({
        rotation: -90,
        centerY: am5.p50,
        centerX: am5.p100,
        paddingRight: 15
      });

      xRenderer.grid.template.setAll({
        location: 1
      })

      let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
        maxDeviation: 0.3,
        categoryField: "month",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {})
      }));

      let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
        maxDeviation: 0.3,
        renderer: am5xy.AxisRendererY.new(root, {
          strokeOpacity: 0.1
        })
      }));


      // Create series
      // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
      let series = chart.series.push(am5xy.ColumnSeries.new(root, {
        name: "Series 1",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "totalHour",
        sequencedInterpolation: true,
        categoryXField: "month",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{valueY}"
        })
      }));

      series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5, strokeOpacity: 0 });
      series.columns.template.adapters.add("fill", function (fill, target) {
        const colors = chart.get("colors");
        if (colors) {
          return colors.getIndex(series.columns.indexOf(target));
        } else {
          console.error("Colors property is undefined.");
          return fill; // Return some default fill value
        }
      });

      series.columns.template.adapters.add("stroke", function (stroke, target) {
        const colors = chart.get("colors");
        if (colors) {
          return colors.getIndex(series.columns.indexOf(target));
        } else {
          console.error("Colors property is undefined.");
          return stroke; // Return some default stroke value
        }
      });

      // Set data
     
      xAxis.data.setAll(this.chartData);
      series.data.setAll(this.chartData);

      // Make stuff animate on load
      // https://www.amcharts.com/docs/v5/concepts/animations/
      series.appear(1000);
      chart.appear(1000, 100);
    })
  }

  ngOnDestroy() {
    // Clean up chart when the component is removed
    this.browserOnly(() => {
      if (this.root) {
        this.root.dispose();
      }
    });
  }

}

