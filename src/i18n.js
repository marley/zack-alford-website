import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: import.meta.env.DEV,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        bio: "Bio",
        tour: "Tour",
        listen: "Listen",
        news: "News",
        "hero-subtitle":
          "Professional drummer — live with The Psychedelic Furs and sessions with artists from Bowie to Springsteen.",
        "cta-tour": "Tour dates",
        "cta-listen": "Listen",
        "tour-none":
          "Check back for announcements, or get in touch.",
        "tour-tickets": "Tickets & info",
        "listen-config-hint":
          "Set VITE_SPOTIFY_ARTIST_ID and VITE_YOUTUBE_VIDEO_ID in .env to embed players here. You can also open",
        "listen-spotify-link": "Spotify",
        "listen-youtube-link": "YouTube",
        "listen-spotify-heading": "Spotify",
        "listen-video-heading": "Featured video",
        "news-empty": "No news items yet.",
        "last-updated": "Bio last reviewed {{month}} {{year}}",
        "connect-empty":
          "Add social URLs in your .env (see .env.example) to show link buttons here.",
        "connect-instagram": "Instagram",
        "connect-facebook": "Facebook",
        "connect-youtube": "YouTube",
        "connect-spotify": "Spotify",
        "connect-bandsintown": "Bandsintown",
        "connect-tiktok": "TikTok",
        "connect-x": "X / Twitter",
        "biography-para-0": {
          title: "RIGHT NOW",
          text: "Zack is touring and recording. For the latest show announcements and tickets, use the Tour and Connect sections, and follow socials. This site highlights selected performances and a deep catalog of studio work.",
        },
        "biography-para-1": {
          title: "",
          text: 'Zachary "Zack" Alford is a New York based professional drummer known for having toured and/or recorded with some of the world\'s top musicians. He grew up on Manhattan\'s upper west side during the robust eras of the 1970\'s and 1980\'s. After having established himself on the club scene there, and a brief stint at Berklee College of Music (1986-1987), his career began to take off. He has played with The B-52\'s, The Psychedelic Furs, David Bowie, Bruce Springsteen, Billy Joel, Gwen Stefani, Nena, The Manic Street Preachers, Tomoyasu Hotei, Zucchero Fornicari, Suzanne Vega, James Chance, The Dance, Melvin Gibbs, Vernon Reid, Kelvyn Bell, Grayson Hugh, Ivan Julian, Manolo Garcia, Rafael, Kelly Clarkson, Suzanna Hoffs, Maggie\'s Dream, and more.',
        },
        "biography-para-2": {
          title: "EARLY CAREER",
          text: "From an early age, Zachary was exposed to music through his older siblings. His sister's boyfriend had a band who rehearsed in the living room, and his brother's best friend was a drummer. At age 11 Zachary asked his mom for a drum set for Christmas and from that day forward music became a lifelong passion. By age 14 he played his first live gig in the East Village and would soon work his way through all of New York's iconic clubs, including CBGB's, The Ritz, The Peppermint Lounge, Folk City, Danceteria, The Pyramid Club, The Lizmar Lounge, The Knitting Factory, The Lonestar, The Limelight, The Area Club, and eventually The Apollo Theater. All this primed him for the next step: his first tour with a major label artist, RCA's Grayson Hugh in 1988. There he got his first taste of life on a tour bus, and, as the opener for the Hunter/ Ronson Band, got to watch Mick Ronson, the legendary guitarist of the Spiders From Mars, play every night from the side of the stage. A fortuitous event as he would himself later play with David Bowie.",
        },
        "biography-para-3": {
          title: "INTERNATIONAL",
          text: "But it was in 1989 that Zachary would be discovered by post-punk darlings, The B-52's, and his career would enter a new phase. The amazing success of their Cosmic Thing tour surprised everyone, the band included, and with the advent of MTV, Zachary gained worldwide recognition. His hard hitting, less-is-more style, influenced by his favorite drummers, Charley Drayton, Steve Jordan, John Bonham and Steve Ferrone, would not go unnoticed, and he would go on to work for artists Bruce Springsteen (1992-1994), David Bowie (1995-1998) and Hotei Tomoyasu (1998-2003). In 2005 he toured with Gwen Stefani for her L.A.M.B. tour and again in 2007 for The Sweet Escape World Tour, Zucchero’s Shake tour in 2002, and Kelly Clarkson's Addicted tour in 2006. All the while showing up in the studio to record with artists such as Suzanna Hoffs (1990), The Manic Street Preachers (1992), Billy Joel (1993), Jeffery Gaines (1998), Zucchero (2002), Rafael (2008, 2009), Suzanne Vega (2014), and Manolo Garcia (2015).",
        },
        "biography-para-4": {
          title: "CURRENTLY",
          text: "In 2013, he returned to David Bowie’s side for the comeback album The Next Day and continued to work with Hotei Tomoyasu. In 2017 he began touring with German superstar, Nena. He is currently drumming for British post-punk Icons, The Psychedelic Furs.",
        },
        discography: "Discography",
        more: "More",
        gallery: "Gallery",
        "view-album": "View",
        gear: "Gear",
        connect: "Connect",
        "zack-alford-copyright": "(c) Zachary Alford {{year}}",
        "site-by": "Site by ",
      },
    },
  },
});

export default i18n;
