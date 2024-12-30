import { CircularGaugeModule } from '@syncfusion/ej2-angular-circulargauge';
import { AnnotationsService } from '@syncfusion/ej2-angular-circulargauge';
import { IResizeEventArgs } from '@syncfusion/ej2-circulargauge';

import {
  Component,
  ViewChild,
  TemplateRef,
  ChangeDetectorRef,
} from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  providers: [AnnotationsService],
  imports: [CircularGaugeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('RpmGaugeTemplateRef') public RpmTemplate!: TemplateRef<any>;
  @ViewChild('OuterRimGaugeTemplateRef')
  public OuterRimTemplate!: TemplateRef<any>;
  @ViewChild('FuelGaugeTemplateRef')
  public FuelTemplate!: TemplateRef<any>;
  @ViewChild('TemperatureGaugeTemplateRef')
  public TemperatureTemplate!: TemplateRef<any>;

  // Defines the speed gauge properties.
  public outerSpeedMinorTicks: object = {
    height: 8,
    width: 3,
    offset: 10,
    color: '#FFFFFF',
  };
  public outerSpeedMajorTicks: object = {
    height: 15,
    width: 3,
    interval: 20,
    offset: 12,
    color: '#FFFFFF',
  };
  public outerSpeedLineStyle: object = {
    width: 10,
    color: '#252525',
  };
  public outerSpeedLabelStyle: object = {
    font: {
      color: 'white',
      fontFamily: 'sans-serif',
      size: '20px',
      fontWeight: '700',
    },
    offset: 4,
  };
  public outerSpeedCap: object = {
    radius: 15,
    color: '#343434',
    border: { width: 0 },
  };
  public outerSpeedTail: object = {
    length: '0%',
  };

  // Defines the temperature gauge properties.
  public outerTemperatureLabelStyle: object = {
    font: {
      color: '#B9B801',
      fontFamily: 'sans-serif',
      size: '0px',
    },
    offset: -1,
  };
  public outerTemperatureMajorTicks: object = {
    interval: 5,
    height: 12,
    width: 2,
    color: '#0D27B7',
    offset: 2,
  };
  public outerTemperatureMinorTicks: object = {
    offset: 2,
    height: 8,
    width: 2,
    color: '#0D27B7',
  };

  public outerTemperatureLineStyle: object = { width: 3, color: '#0D27B7' };

  public outerTemperatureCap: object = { radius: 6, color: '#343434' };

  public outerTemperatureNeedleTail: object = { length: '0%' };

  // Defines the fuel gauge properties.
  public outerFuelLabelStyle: object = {
    font: {
      color: '#B9B801',
      fontFamily: 'sans-serif',
      size: '0px',
    },
    offset: -1,
  };
  public outerFuelMajorTicks: object = {
    interval: 20,
    height: 12,
    width: 2,
    offset: 2,
    color: '#0D27B7',
  };
  public outerFuelMinorTicks: object = {
    offset: 2,
    height: 8,
    width: 2,
    color: '#0D27B7',
  };

  public outerFuelLineStyle: object = { width: 3, color: '#0D27B7' };

  public outerFuelCap: object = { radius: 6, color: '#343434' };

  public outerFuelNeedleTail: object = { length: '0%' };

  // Defines the rpm gauge properties.
  public outerRpmLabelStyle: object = {
    font: {
      color: 'white',
      fontFamily: 'sans-serif',
      size: '20px',
      fontWeight: '700',
    },
    offset: -1,
  };
  public outerRpmMajorTicks: object = {
    color: '#FFFFFF',
    height: 15,
    width: 3,
    offset: 10,
    interval: 1,
  };
  public outerRpmMinorTicks: object = {
    color: '#FFFFFF',
    height: 10,
    width: 3,
    offset: 10,
  };

  public outerRpmLineStyle: object = { width: 10, color: '#252525' };

  public outerRpmCap: object = { radius: 15, color: '#343434' };

  public outerRpmNeedleTail: object = { length: '0%' };

  // Defines the outer rim gauge properties.
  public outerRimLabelStyle: object = {
    font: {
      color: 'transparent',
      size: '0 px',
    },
  };
  public outerRimMajorTicks: object = {
    height: 0,
    width: 0,
    offset: 8,
    interval: 1,
  };
  public outerRimMinorTicks: object = {
    height: 0,
    width: 0,
    offset: 8,
  };

  public outerRimLineStyle: object = { width: 10, color: '#252525' };

  // Defines the animation properties in the gauges.
  public animation: object = {
    enable: false,
    duration: 0,
  };

  // Reloads the current page using resize event, which refreshes the entire application.
  public resize(args: IResizeEventArgs): void {
    window.location.reload();
  }

  constructor(private cdr: ChangeDetectorRef) { }
  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }

}
