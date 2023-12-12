
export type MoonType =  {
  timestamp: number,
  datestamp: string,
  sun: {
    sunrise: number,
    sunrise_timestamp: string,
    sunset: number,
    sunset_timestamp: string,
    solar_noon: string,
    day_length: string,
    sun_altitude: number,
    sun_distance: number,
    sun_azimuth: number
  },
  moon: {
    phase: string,
    illumination: string,
    age_days: number,
    lunar_cycle: string,
    phase_name: string,
    stage: string,
    emoji: string,
    zodiac:{
      sun_sign: string,
      moon_sign: string,
    } 
    moonrise: string,
    moonrise_timestamp: number,
    moonset: string,
    moonset_timestamp: number,
    moon_altitude: number,
    moon_distance: number,
    moon_azimuth: number,
    moon_parallactic_angle: number
  },
  moon_phases: {
    new_moon: {
      current: {
        timestamp: number,
        datestamp: string,
        days_ago: number
      },
      next: {
        timestamp: number,
        datestamp: string,
        days_ahead: number
      }
    },
    first_quarter: {
      current: {
        timestamp: number,
        datestamp: string,
        days_ago: number
      },
      next: {
        timestamp: number,
        datestamp: string,
        days_ahead: number
      }
    },
    full_moon: {
      current: {
        timestamp: number,
        datestamp: string,
        days_ago: number,
        name: string,
        description: string,
      },
      next: {
        timestamp: number,
        datestamp: string,
        days_ahead: number,
        name: string,
        description: string
      }
    },
    last_quarter: {
      current: {
        timestamp: number,
        datestamp: string,
        days_ago: number
      },
      next: {
        timestamp: number,
        datestamp: string,
        days_ahead: number
      }

    }
  }
}