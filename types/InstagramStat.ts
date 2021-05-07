interface PageStat {
  mediaCount: number
  followersCount: number
  followsCount: number
}

interface AudienceStat {
  audienceCity: Object
  audienceGenderAge: Object
}

export interface InstagramStat {
  page: PageStat
  audience: AudienceStat
}
